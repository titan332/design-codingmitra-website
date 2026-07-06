// app/products/page.tsx
import type { Metadata } from "next"
import { Products } from "@/components/sections/products/products"
import { CtaBanner } from "@/components/sections/cta-banner"
import { ProductHero } from "@/components/sections/products/product-hero"
// import { ProductImpact } from "@/components/sections/products/product-impact"
export const metadata: Metadata = {
  title: "Products | SaaS Platforms Built in Production",
  description: "Discover DailyMock - AI-powered assessment platform and KidsMate - interactive coding platform for children. Trusted by thousands of users.",
}

export default function ProductsPage() {
  return (
    <main>
      <ProductHero />
      <Products />
      {/* <ProductImpact /> */}
      <CtaBanner />
    </main>
  )
}