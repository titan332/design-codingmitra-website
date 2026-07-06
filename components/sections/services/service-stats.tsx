// components/sections/service-stats.tsx
import { Reveal } from "@/components/reveal"
import { TrendingUp, Users, Clock, Award } from "lucide-react"

const stats = [
  { 
    icon: TrendingUp, 
    value: "500+", 
    label: "Projects Delivered", 
    description: "Across 20+ industries worldwide" 
  },
  { 
    icon: Users, 
    value: "98%", 
    label: "Client Retention", 
    description: "Long-term partnerships built on trust" 
  },
  { 
    icon: Clock, 
    value: "45", 
    label: "Days Average Delivery", 
    description: "From concept to MVP deployment" 
  },
  { 
    icon: Award, 
    value: "150+", 
    label: "AI Solutions", 
    description: "Custom AI implementations" 
  },
]

export function ServiceStats() {
  return (
    <section className="border-y border-border bg-secondary/5 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                  <stat.icon className="size-6" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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