// app/services/page.tsx
import type { Metadata } from "next"
import { Solutions } from "@/components/sections/services/solutions"
import { CtaBanner } from "@/components/sections/cta-banner"
import { ServiceHero } from "@/components/sections/services/service-hero"
import { ServiceProcess } from "@/components/sections/services/service-process"
// import { ServiceStats } from "@/components/sections/services/service-stats"
import { ServiceTestimonials } from "@/components/sections/services/service-testimonials"

export const metadata: Metadata = {
  title: "Services | AI-Powered Software Development",
  description: "Transform your business with AI-powered software development, web & mobile apps, automation, and technical consulting from industry experts.",
}

export default function ServicesPage() {
  return (
    <main>
      <ServiceHero />
      <Solutions />
      {/* <ServiceStats /> */}
      <ServiceProcess />
      <ServiceTestimonials />
      <CtaBanner />
    </main>
  )
}