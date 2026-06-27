import { Monitor, Smartphone, Package } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const approachItems = [
  "User-centric design methodology",
  "Agile development processes",
  "Scalable architecture design",
  "Cross-platform compatibility",
  "Continuous integration & deployment",
]

const serviceCards = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Build modern, responsive web applications with cutting-edge technologies that deliver exceptional user experiences.",
    technologies: ["React", "Next.js", "Angular", "Vue.js", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Create powerful cross-platform mobile applications that work seamlessly across iOS and Android devices.",
    technologies: ["React Native", "Flutter", "iOS Native", "Android", "Xamarin"],
  },
  {
    icon: Package,
    title: "Custom Solutions",
    description: "Develop tailored software solutions designed to meet your specific business requirements and scale with your growth.",
    technologies: ["Python", "Java", "C#", "PHP", "Database"],
  },
]

export function ComprehensiveSolutions() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Digital Solutions"
          description="End-to-end development services tailored to transform your ideas into powerful digital products."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold">What We Offer</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  We deliver comprehensive web and mobile solutions that drive business growth. Our team specializes in building scalable, high-performance applications using modern frameworks and best practices.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  From concept to deployment, we ensure your digital products are built with quality, security, and user experience at the forefront. Our solutions are designed to evolve with your business needs.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-semibold">Our Approach</h3>
                <ul className="mt-4 space-y-3">
                  {approachItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-foreground/90">
                      <span className="flex size-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-5">
            {serviceCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <card.icon className="size-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
