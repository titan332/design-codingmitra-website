import type { Metadata } from "next"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with the latest insights on technology, software development, AI, and industry trends.",
}

export default function BlogPage() {
  return (
    <main>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="Latest Insights"
            description="Stay updated with the latest insights on technology, software development, AI, and industry trends. Coming soon!"
          />
          <div className="mt-12 text-center text-muted-foreground">
            <p>Our blog is currently being updated. Check back soon for the latest articles and insights.</p>
          </div>
        </div>
      </section>
      <CtaBanner />
    </main>
  )
}
