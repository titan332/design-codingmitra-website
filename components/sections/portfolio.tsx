import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"

type Project = {
  title: string
  category: string
  image: string
  description: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: "DailyMock",
    category: "SaaS Product",
    image: "/product-dailymock.png",
    description:
      "An AI-powered assessment platform with mock exams, coding tests, analytics and certificates.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AI"],
  },
  {
    title: "KidsMate",
    category: "EdTech Product",
    image: "/product-kidsmate.png",
    description:
      "An interactive coding platform for kids with live classes, curriculum and a parent dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Corporate Business Website",
    category: "Web Development",
    image: "/portfolio-business-site.png",
    description:
      "A fast, SEO-optimized marketing website that lifted lead generation and brand credibility.",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Operations Admin Dashboard",
    category: "Web Application",
    image: "/portfolio-admin.png",
    description:
      "A real-time admin dashboard with role-based access, analytics and data management.",
    tech: ["React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "AI Automation Suite",
    category: "AI Project",
    image: "/portfolio-ai.png",
    description:
      "An AI assistant and automation workflows that cut manual processing time dramatically.",
    tech: ["Python", "AI", "AWS"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Work we're proud of"
          description="A glimpse of the products, platforms and applications we've designed, built and shipped."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    width={1024}
                    height={640}
                    className="h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute left-4 top-4 backdrop-blur"
                  >
                    {project.category}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold">
                      {project.title}
                    </h3>
                    <a
                      href="#contact"
                      aria-label={`Discuss a project like ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-accent-foreground"
                    >
                      <ArrowUpRight className="size-5" />
                    </a>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
