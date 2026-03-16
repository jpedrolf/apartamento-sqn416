// To revert to the original Hero + Highlights, uncomment these two imports
// and replace <HeroWithHighlights /> with <Hero /> + <Highlights /> below.
// import { Hero } from "@/components/sections/Hero";
// import { Highlights } from "@/components/sections/Highlights";
import { HeroWithHighlights } from "@/components/sections/HeroWithHighlights";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { FloorPlan } from "@/components/sections/FloorPlan";
import { Location } from "@/components/sections/Location";

import { Contact } from "@/components/sections/Contact";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <HeroWithHighlights />
      {/* Solid background covers the fixed hero image for all remaining sections */}
      <div className="relative z-10 bg-background">
        <Gallery />
        <About />
        <FloorPlan />
        <Location />
        <Contact />
      </div>
      <WhatsAppFab />
    </>
  );
}
