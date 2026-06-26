import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Users,
} from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const programs = [
  "MERN Stack",
  "Java Full Stack",
  "Python",
  "Data Science",
  "AI",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Git",
  "CRT Training",
]

const benefits = [
  {
    icon: Code2,
    title: "Real client projects",
    body: "Work on live, production-grade codebases — not throwaway tutorials.",
  },
  {
    icon: Users,
    title: "1:1 mentorship",
    body: "Guidance from working engineers who review your code and PRs.",
  },
  {
    icon: Award,
    title: "Verified certificates",
    body: "Industry-recognized certificates and detailed performance reports.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement support",
    body: "CRT, mock interviews and college partnerships that lead to jobs.",
  },
]

export function Training() {
  return (
    <section id="training" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training & Internships"
          title="Become industry-ready, not just exam-ready"
          description="Hands-on programs designed around what hiring teams actually look for, taught by engineers who ship real software every day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-heading text-lg font-semibold">
                Programs we offer
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {programs.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <Button asChild className="mt-7 rounded-full">
                <a href="#contact">
                  Explore Programs
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                    <b.icon className="size-5" />
                  </span>
                  <h4 className="mt-4 font-heading font-semibold">{b.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
