import type { Metadata } from "next"
import { FloatingWidgets } from "@/components/floating-widgets"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { Pillars } from "@/components/sections/pillars"
import { Industries } from "@/components/sections/industries"
import { WhyUs } from "@/components/sections/why-us"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { Faq } from "@/components/sections/faq"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Contact } from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Home",
  description: "CodingMitra Pvt. Ltd. - Your trusted technology partner for IT services, software products, training and internships.",
}

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        {/* <TrustedBy /> */}
        <About />
        <Pillars />
        <WhyUs />
        <Process />
        <Stats />
        <CtaBanner />
        <Testimonials />
        {/* <Products /> */}
        {/* <Training /> */}
        {/* <Solutions /> */}
        <Industries />
        <Contact />
        <Faq />
        {/* <Technologies /> */}
        {/* <Portfolio /> */}
      </main>
      <FloatingWidgets />
    </>
  )
}
