import type { Metadata } from "next"
import { Solutions } from "@/components/sections/solutions"
import { ComprehensiveSolutions } from "@/components/sections/comprehensive-solutions"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Services | CodingMitra Pvt. Ltd.",
  description: "AI-powered software development services including web development, mobile apps, AI solutions, automation, and technical consulting for modern businesses.",
}

export default function ServicesPage() {
  return (
    <main>
      {/* <ComprehensiveSolutions /> */}
      <Solutions />
      
      <CtaBanner />
    </main>
  )
}
