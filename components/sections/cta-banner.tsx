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
                Ready to build
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-2xl font-semibold leading-relaxed text-primary-foreground text-pretty">
                Your Product Doesn&apos;t Need to Be Perfect.
                <br />
                It Needs to Start.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 text-pretty">
                Let&apos;s turn your idea into a product your users will love. Talk to us today — no commitment, just a conversation.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full cursor-pointer"
                >
                  <a href="#contact" className="cursor-pointer flex items-center gap-2 ">
                    Schedule Now
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/60 text-pretty">
                We&apos;ll review your project goals, discuss the best tech approach, and outline a clear roadmap — no strings attached.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
