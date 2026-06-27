import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWidgets } from "@/components/floating-widgets"
import { Hero } from "@/components/sections/hero"
import { TrustedBy } from "@/components/sections/trusted-by"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { Pillars } from "@/components/sections/pillars"
import { Products } from "@/components/sections/products"
import { Training } from "@/components/sections/training"
import { Solutions } from "@/components/sections/solutions"
import { Industries } from "@/components/sections/industries"
import { WhyUs } from "@/components/sections/why-us"
import { Technologies } from "@/components/sections/technologies"
import { Process } from "@/components/sections/process"
import { Portfolio } from "@/components/sections/portfolio"
import { Testimonials } from "@/components/sections/testimonials"
import { Faq } from "@/components/sections/faq"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
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
        <Solutions />
        <Industries />
        <Contact />
        <Faq />
        {/* <Technologies /> */}
        {/* <Portfolio /> */}
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </div>
  )
}
