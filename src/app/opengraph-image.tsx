import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Apartamento Mocha — 3 quartos, ~65 m², Asa Norte, Brasília";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const heroPath = join(process.cwd(), "public/images/gallery/hero.jpg");
  const heroBytes = await readFile(heroPath);
  const heroBase64 = `data:image/jpeg;base64,${heroBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Background image */}
        <img
          src={heroBase64}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "60px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(212,162,78,0.9)",
                color: "#1a3328",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              R$ 3.800/mês
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            Apartamento Mocha
          </div>

          {/* Address */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "20px",
            }}
          >
            SQN 416, Bloco P — Asa Norte, Brasília
          </div>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "22px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span>3 quartos</span>
            <span>·</span>
            <span>~65 m²</span>
            <span>·</span>
            <span>Semi-mobiliado</span>
            <span>·</span>
            <span>Pet-friendly</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
