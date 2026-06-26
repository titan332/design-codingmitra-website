import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
            >
              <div className="absolute -right-16 -top-16 size-64 rounded-full bg-accent blur-3xl" />
              <div className="absolute -bottom-20 -left-10 size-72 rounded-full bg-accent blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Let&apos;s build something great together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80 text-pretty">
                Whether you need a product built, a team trained or a partner
                for your institution — we&apos;d love to hear from you. Book a
                free consultation today.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full"
                >
                  <a href="#contact">
                    Book a Free Consultation
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="#products">Explore Our Products</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
