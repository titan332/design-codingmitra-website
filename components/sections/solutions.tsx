import {
  Bot,
  Boxes,
  Cloud,
  Code2,
  Cpu,
  Globe,
  LayoutDashboard,
  LifeBuoy,
  Plug,
  RefreshCw,
  Rocket,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react"
import { Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const solutions = [
  { icon: Code2, title: "Software Development", body: "Robust, maintainable custom software tailored to your operations." },
  { icon: Globe, title: "Web Development", body: "Fast, responsive, SEO-friendly websites and web apps." },
  { icon: Smartphone, title: "Mobile Apps", body: "Cross-platform mobile experiences your users will love." },
  { icon: Sparkles, title: "AI Solutions", body: "LLMs, chatbots and intelligent features baked into your product." },
  { icon: Bot, title: "AI Automation", body: "Automate workflows and cut manual effort with smart agents." },
  { icon: LayoutDashboard, title: "CMS Development", body: "Flexible content platforms your team can actually manage." },
  { icon: Boxes, title: "SaaS Development", body: "Multi-tenant, subscription-ready SaaS built to scale." },
  { icon: Rocket, title: "MVP Development", body: "Validate ideas fast with lean, investor-ready MVPs." },
  { icon: Cpu, title: "UI/UX Design", body: "Clean, accessible interfaces that convert and delight." },
  { icon: Plug, title: "API Integration", body: "Connect tools, payments and third-party services seamlessly." },
  { icon: Cloud, title: "Cloud Deployment", body: "Secure, scalable infrastructure on modern cloud platforms." },
  { icon: Workflow, title: "Technical Consulting", body: "Architecture and strategy guidance from senior engineers." },
  { icon: RefreshCw, title: "Product Modernization", body: "Refactor and re-platform legacy systems with confidence." },
  { icon: LifeBuoy, title: "Maintenance & Support", body: "Reliable ongoing support, monitoring and improvements." },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Engineering Solutions for Modern Businesses"
          description="A full-stack partner across the entire product lifecycle — from idea and design to launch, scale and support."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
