import {
  ArrowRight,
  Boxes,
  Code2,
  GraduationCap,
} from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    icon: Code2,
    title: "IT Services",
    description:
      "End-to-end engineering for businesses that want to ship faster and scale with confidence.",
    items: [
      "Custom Software Development",
      "Web Development",
      "AI Solutions",
      "AI Automation",
      "Cloud Solutions",
      "UI/UX Design",
      "Technical Consulting",
    ],
    cta: { label: "Hire Us", href: "/services" },
  },
  {
    icon: Boxes,
    title: "Software Products",
    description:
      "Our own SaaS platforms, built and battle-tested in production by real users.",
    items: [
      "DailyMock — Assessments",
      "KidsMate — Kids Coding",
      "Performance Analytics",
      "Certificates & Reports",
      "Continuous Improvements",
      "Scalable Architecture",
    ],
    cta: { label: "View Products", href: "/products" },
  },
  {
    icon: GraduationCap,
    title: "Training & Internships",
    description:
      "Industry-focused programs that turn students into job-ready engineers.",
    items: [
      "MERN & Java Full Stack",
      "Python, Data Science & AI",
      "Live Real-World Projects",
      "CRT & Placement Support",
      "Internship Programs",
      "College Partnerships",
    ],
    cta: { label: "Explore Programs", href: "/training" },
  },
]

export function Pillars() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Three pillars, one trusted partner"
          description="From building software for businesses to shipping our own products and training future engineers — CodingMitra does it all under one roof."
        />

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <a href={p.cta.href} className="group block h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:bg-gradient-to-br hover:from-accent/10 hover:via-primary/5 hover:to-accent/10 dark:hover:from-accent/20 dark:hover:via-primary/10 dark:hover:to-accent/20">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <p.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-5 grid flex-1 gap-2.5">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="size-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="mt-6 justify-center px-0 text-primary hover:bg-transparent hover:text-accent-foreground"
                  >
                    <span className="flex items-center gap-2">
                      {p.cta.label}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
