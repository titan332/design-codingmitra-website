// components/sections/service-process.tsx
import { Reveal } from "@/components/reveal"
import { Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "We analyze your business goals, user needs, and technical requirements to create a roadmap for success.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Code2,
    title: "Design & Development",
    description: "Our team builds your solution using agile methodology, with continuous feedback and iterations.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Launch & Deploy",
    description: "We ensure a smooth launch with thorough testing, deployment automation, and performance optimization.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Scale & Optimize",
    description: "Post-launch, we monitor, optimize, and scale your solution as your business grows.",
    color: "from-green-500 to-emerald-500"
  },
]

export function ServiceProcess() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium text-primary">Our Process</span>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              How We Bring Ideas to Life
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A proven methodology that ensures transparency, quality, and successful outcomes.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-8 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.15}>
                <div className={`flex flex-col items-center gap-6 sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                      <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                      <h3 className="mt-1 font-heading text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent p-1">
                    <div className="flex size-full items-center justify-center rounded-full bg-background">
                      <step.icon className="size-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}