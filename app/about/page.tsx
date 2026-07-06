import type { Metadata } from "next"
import { About } from "@/components/sections/about"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CodingMitra Pvt. Ltd. - your trusted technology partner for IT services, software products, training and internships.",
}

export default function AboutPage() {
  return (
    <main>
      <About />
      <CtaBanner />
    </main>
  )
}
