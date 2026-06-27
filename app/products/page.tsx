import type { Metadata } from "next"
import { Products } from "@/components/sections/products"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Products",
  description: "SaaS products built and trusted in production - DailyMock for assessments and KidsMate for kids coding education.",
}

export default function ProductsPage() {
  return (
    <main>
      <Products />
      <CtaBanner />
    </main>
  )
}
