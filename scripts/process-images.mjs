import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, basename } from "path";
import { execSync } from "child_process";

const INPUT_DIR = "public/images";
const TEMP_DIR = "public/images/_converted";
const OUTPUT_DIR = "public/images/gallery";

// Selected photos (from 82 → 18)
const SELECTED = {
  // Hero
  hero: "apto-202_foto_sala_12.HEIC",

  // Gallery
  gallery: [
    { file: "apto-202_foto_sala_3.HEIC", label: "sala-janela" },
    { file: "apto-202_foto_sala_11.HEIC", label: "sala-frontal" },
    { file: "apto-202_foto_sala_12.HEIC", label: "sala-vista" },
    { file: "apto-202_foto_sala-vista-janela_.HEIC", label: "vista-janela" },
    { file: "apto-202_foto_cozinha_6.HEIC", label: "cozinha-frontal" },
    { file: "apto-202_foto_cozinha_7.HEIC", label: "cozinha-angular" },
    { file: "apto-202_foto_cozinha_5.HEIC", label: "cozinha-equipamentos" },
    { file: "apto-202_foto_quarto-1_2.HEIC", label: "quarto1-janela" },
    { file: "apto-202_foto_quarto-1_4.HEIC", label: "quarto1-armario" },
    { file: "apto-202_foto_quarto-2_1.HEIC", label: "quarto2-entrada" },
    { file: "apto-202_foto_quarto-2_4.HEIC", label: "quarto2-janela" },
    { file: "apto-202_foto_quarto-3_3.HEIC", label: "quarto3" },
    { file: "apto-202_foto_banheiro-social_2.HEIC", label: "banheiro-social" },
    { file: "apto-202_foto_banheiro-servico_1.HEIC", label: "banheiro-servico" },
    { file: "apto-202_foto_area-servico_4.HEIC", label: "area-servico-lavanderia" },
    { file: "apto-202_foto_area-servico_6.HEIC", label: "area-servico-cobogo" },
    { file: "apto-202_foto_area-servico_5.HEIC", label: "area-servico" },
    { file: "apto-202_foto_fachada_1.HEIC", label: "fachada-jardim" },
    { file: "apto-202_foto_fachada_2.HEIC", label: "fachada-frontal" },
    { file: "apto-202_foto_portaria_2.HEIC", label: "portaria" },
    { file: "apto-202_foto_quadra-esportes_1.HEIC", label: "quadra" },
  ],
};

// Convert HEIC to JPEG via macOS sips (lossless intermediate)
function heicToJpeg(heicPath) {
  const name = basename(heicPath, ".HEIC");
  const outPath = join(TEMP_DIR, `${name}.jpg`);
  execSync(`sips -s format jpeg -s formatOptions 100 "${heicPath}" --out "${outPath}" 2>/dev/null`);
  return outPath;
}

async function processImage(inputPath, outputName, options = {}) {
  const { maxWidth = 1920, quality = 82, isHero = false } = options;

  let pipeline = sharp(inputPath)
    // Auto-rotate based on EXIF
    .rotate()
    // Resize keeping aspect ratio
    .resize({
      width: isHero ? 2400 : maxWidth,
      height: isHero ? 1600 : undefined,
      fit: isHero ? "cover" : "inside",
      withoutEnlargement: true,
    })
    // Warm tone adjustments for professional look
    .modulate({
      brightness: 1.03,    // Slight brightness boost
      saturation: 1.12,    // Slightly more vivid colors
    })
    // Sharpen for web clarity
    .sharpen({
      sigma: 0.8,
      m1: 0.7,
      m2: 0.4,
    })
    // Warm tint via color matrix (slightly boost reds, reduce blues)
    .recomb([
      [1.05, 0.02, 0.0],
      [0.0,  1.02, 0.0],
      [0.0,  0.0,  0.92],
    ])
    // Good contrast via linear adjustment
    .linear(1.05, -8);

  // Save as JPEG (widely compatible)
  await pipeline
    .jpeg({
      quality,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(join(OUTPUT_DIR, `${outputName}.jpg`));

  // Also save WebP for modern browsers
  pipeline = sharp(inputPath)
    .rotate()
    .resize({
      width: isHero ? 2400 : maxWidth,
      height: isHero ? 1600 : undefined,
      fit: isHero ? "cover" : "inside",
      withoutEnlargement: true,
    })
    .modulate({
      brightness: 1.03,
      saturation: 1.12,
    })
    .sharpen({
      sigma: 0.8,
      m1: 0.7,
      m2: 0.4,
    })
    .recomb([
      [1.05, 0.02, 0.0],
      [0.0,  1.02, 0.0],
      [0.0,  0.0,  0.92],
    ])
    .linear(1.05, -8);

  await pipeline
    .webp({
      quality: quality - 2,
      effort: 6,
    })
    .toFile(join(OUTPUT_DIR, `${outputName}.webp`));

  console.log(`  ✓ ${outputName}`);
}

async function main() {
  console.log("🏠 Processando imagens do apartamento...\n");

  // Create directories
  await mkdir(TEMP_DIR, { recursive: true });
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Step 1: Convert all selected HEIC to JPEG via sips
  console.log("🔄 Convertendo HEIC → JPEG (via sips)...");
  const allFiles = new Set([SELECTED.hero, ...SELECTED.gallery.map(g => g.file)]);
  for (const f of allFiles) {
    heicToJpeg(join(INPUT_DIR, f));
  }
  console.log(`  ✓ ${allFiles.size} arquivos convertidos\n`);

  // Step 2: Process hero image (larger, cover crop)
  const heroBase = basename(SELECTED.hero, ".HEIC");
  console.log("📸 Hero:");
  await processImage(
    join(TEMP_DIR, `${heroBase}.jpg`),
    "hero",
    { isHero: true, quality: 85 }
  );

  // Step 3: Process gallery images
  console.log("\n🖼  Galeria:");
  for (const item of SELECTED.gallery) {
    const base = basename(item.file, ".HEIC");
    await processImage(
      join(TEMP_DIR, `${base}.jpg`),
      item.label,
      { quality: 82 }
    );
  }

  // Summary
  const files = await readdir(OUTPUT_DIR);
  const jpgs = files.filter((f) => f.endsWith(".jpg"));
  const webps = files.filter((f) => f.endsWith(".webp"));

  console.log(`\n✅ Pronto! ${jpgs.length} JPEGs + ${webps.length} WebPs em ${OUTPUT_DIR}/`);

  // Calculate total size
  const { statSync } = await import("fs");
  let totalSize = 0;
  for (const f of files) {
    totalSize += statSync(join(OUTPUT_DIR, f)).size;
  }
  console.log(`📦 Tamanho total: ${(totalSize / 1024 / 1024).toFixed(1)} MB`);
}

main().catch(console.error);
