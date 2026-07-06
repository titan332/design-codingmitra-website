import {
  LifeBuoy,
  PencilRuler,
  Rocket,
  Search,
  Code2,
  ClipboardList,
} from "lucide-react"
import { Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  { icon: Search, title: "Discover", body: "We dig into goals, users and constraints to define what success looks like." },
  { icon: ClipboardList, title: "Plan", body: "Clear scope, milestones and architecture before a line of code is written." },
  { icon: PencilRuler, title: "Design", body: "Intuitive, on-brand interfaces validated with you before build." },
  { icon: Code2, title: "Develop", body: "Agile sprints with weekly demos and continuous quality checks." },
  { icon: Rocket, title: "Deploy", body: "Smooth, secure releases to scalable cloud infrastructure." },
  { icon: LifeBuoy, title: "Support", body: "Ongoing monitoring, maintenance and iterative improvements." },
]

export function Process() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A development process built on clarity with power of AI"
          description="A proven, transparent workflow that keeps you in the loop from first conversation to long-term support."
        />

        <Stagger className="relative mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="size-6" />
                  </span>
                  <span className="font-heading text-4xl font-extrabold text-border">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
