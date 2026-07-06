import { Compass, Eye, Rocket, Target } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To empower businesses and learners with reliable, modern technology — building products that scale and talent that's industry-ready from day one.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be the most trusted technology partner bridging the gap between real-world software engineering and future-ready education.",
  },
  {
    icon: Compass,
    title: "Our Approach",
    body: "Agile, transparent and outcome-driven. We pair senior engineering practices with hands-on mentorship across every engagement.",
  },
]

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="inline-flex dark:text-white items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              About CodingMitra
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              A technology company built for products, businesses and people
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              CodingMitra Pvt. Ltd. is an IT services, product development and
              software development company. We operate across three verticals —
              <strong className="text-foreground"> IT Services</strong>,
              <strong className="text-foreground"> Software Products</strong> and
              <strong className="text-foreground"> Training &amp; Internships</strong> —
              giving us a rare 360° view of how great software is built and how
              great engineers are made.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Over 3+ years we've delivered real client projects, launched our
              own SaaS products and trained over a thousand students through
              programs designed around what the industry actually needs.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                <Rocket className="size-5" />
              </span>
              <p className="text-sm font-medium">
                Real client projects power our training — so learners ship
                production-grade work, not just tutorials.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-5">
            {cards.map((c) => (
              <StaggerItem key={c.title}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {c.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
