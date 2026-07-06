// components/sections/training-stats.tsx
import { Reveal } from "@/components/reveal"
import { Users, Briefcase, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Students Trained",
    description: "Across multiple programs and batches"
  },
  {
    icon: Briefcase,
    value: "85%",
    label: "Placement Rate",
    description: "Students placed in top companies"
  },
  {
    icon: Award,
    value: "50+",
    label: "Workshops Conducted",
    description: "In colleges and corporate offices"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Satisfaction Rate",
    description: "Based on student feedback surveys"
  }
]

export function TrainingStats() {
  return (
    <section className="border-y border-border bg-secondary/5 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="text-center group cursor-pointer">
                <div className="mx-auto mb-3 inline-flex rounded-full bg-gradient-to-r from-accent to-primary p-3 text-white shadow-lg transition-all group-hover:scale-110">
                  <stat.icon className="size-6" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold">{stat.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.description}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}