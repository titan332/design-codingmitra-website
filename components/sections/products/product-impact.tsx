// components/sections/product-impact.tsx
import { Reveal } from "@/components/reveal"
import { GraduationCap, Users, Award, TrendingUp } from "lucide-react"

const impacts = [
  {
    icon: GraduationCap,
    title: "Education Impact",
    description: "Empowering the next generation of coders through interactive learning.",
    stat: "3,000+",
    label: "Students Trained"
  },
  {
    icon: Users,
    title: "Assessment Excellence",
    description: "Helping institutions evaluate talent with AI-powered precision.",
    stat: "5,000+",
    label: "Assessments Completed"
  },
  {
    icon: Award,
    title: "Quality Standards",
    description: "Delivering excellence with industry-leading features and user experience.",
    stat: "4.9/5",
    label: "Average Rating"
  },
  {
    icon: TrendingUp,
    title: "Growth & Scale",
    description: "Rapidly growing platforms serving diverse user bases worldwide.",
    stat: "200%",
    label: "Year-over-Year Growth"
  },
]

export function ProductImpact() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-background to-secondary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium text-primary">Our Impact</span>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Making a Difference at Scale
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Real numbers that demonstrate the value we deliver through our products.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, index) => (
            <Reveal key={impact.title} delay={index * 0.1}>
              <div className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:scale-110 group-hover:from-primary/20 group-hover:to-accent/20">
                  <impact.icon className="size-7" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {impact.stat}
                </div>
                <div className="mt-1 text-sm font-semibold">{impact.label}</div>
                <p className="mt-2 text-xs text-muted-foreground">{impact.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}