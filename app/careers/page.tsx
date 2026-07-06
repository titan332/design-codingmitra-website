import type { Metadata } from "next"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team at CodingMitra. Explore career opportunities in software development, AI, and more.",
}

export default function CareersPage() {
  return (
    <main>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Careers"
            title="Join Our Team"
            description="We're always looking for talented individuals to join our team. Explore career opportunities in software development, AI, and more. Coming soon!"
          />
          <div className="mt-12 text-center text-muted-foreground">
            <p>Our careers page is currently being updated. Check back soon for open positions.</p>
          </div>
        </div>
      </section>
      <CtaBanner />
    </main>
  )
}
