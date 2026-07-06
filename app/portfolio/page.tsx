import type { Metadata } from "next"
import { Portfolio } from "@/components/sections/portfolio"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects across web development, mobile apps, AI solutions, and more.",
}

export default function PortfolioPage() {
  return (
    <main>
      <Portfolio />
      <CtaBanner />
    </main>
  )
}
