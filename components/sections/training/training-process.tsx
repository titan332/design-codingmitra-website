// components/sections/training-process.tsx
import { Reveal } from "@/components/reveal"
import { ClipboardList, Code2, Users, Award, Briefcase } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Assessment & Enrollment",
    description: "We evaluate your current skills and goals to place you in the right program.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code2,
    title: "Hands-on Training",
    description: "Learn by doing with real-world projects, code reviews, and industry best practices.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Mentorship & Support",
    description: "Get 1:1 guidance from experienced engineers who review your code and provide feedback.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Certification & Portfolio",
    description: "Build a portfolio of projects and earn industry-recognized certificates.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    description: "We help you prepare for interviews and connect with hiring partners.",
    color: "from-teal-500 to-cyan-500"
  }
]

export function TrainingProcess() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium text-accent">How It Works</span>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Your Journey to Industry Readiness
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A structured path from enrollment to placement, designed for your success.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-8 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent/30 via-primary/30 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.15}>
                <div className={`flex flex-col items-center gap-6 sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg group cursor-pointer">
                      <span className="text-sm font-medium text-accent">Step {index + 1}</span>
                      <h3 className="mt-1 font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className={`flex size-14 items-center justify-center rounded-full bg-gradient-to-r ${step.color} p-0.5 shadow-lg`}>
                      <div className="flex size-full items-center justify-center rounded-full bg-background">
                        <step.icon className="size-6 text-accent" />
                      </div>
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