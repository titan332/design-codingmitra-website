"use client"

// components/sections/solutions.tsx
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
  Zap,
} from "lucide-react"
import { Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    icon: Code2,
    title: "Custom Software Development",
    body: "Build robust, maintainable enterprise-grade software tailored to your unique operations.",
    tags: ["Enterprise", "Scalable"],
    featured: true
  },
  {
    icon: Globe,
    title: "Web Development",
    body: "Create fast, responsive, SEO-optimized websites and progressive web applications.",
    tags: ["React", "Next.js"],
    featured: false
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "Deliver native and cross-platform mobile experiences your users will love.",
    tags: ["React Native", "Flutter"],
    featured: false
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    body: "Integrate LLMs, computer vision, and intelligent features into your products.",
    tags: ["OpenAI", "Custom Models"],
    featured: true
  },
  {
    icon: Bot,
    title: "AI Automation",
    body: "Automate complex workflows and reduce manual effort with intelligent agents.",
    tags: ["RPA", "Agents"],
    featured: false
  },
  {
    icon: LayoutDashboard,
    title: "CMS Development",
    body: "Build flexible content platforms your team can easily manage and scale.",
    tags: ["Headless", "Custom"],
    featured: false
  },
  {
    icon: Boxes,
    title: "SaaS Development",
    body: "Create multi-tenant, subscription-ready SaaS products built for scale.",
    tags: ["Multi-tenant", "Stripe"],
    featured: true
  },
  {
    icon: Rocket,
    title: "MVP Development",
    body: "Validate your product idea fast with lean, investor-ready MVPs.",
    tags: ["Rapid", "Lean"],
    featured: false
  },
  {
    icon: Cpu,
    title: "UI/UX Design",
    body: "Design clean, accessible interfaces that convert visitors and delight users.",
    tags: ["Design System", "Accessible"],
    featured: false
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    body: "Deploy secure, scalable infrastructure on modern cloud platforms.",
    tags: ["AWS", "Azure"],
    featured: true
  },
  {
    icon: Workflow,
    title: "Technical Consulting",
    body: "Get architecture and strategy guidance from senior engineering experts.",
    tags: ["Strategy", "Audit"],
    featured: false
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    body: "Reliable ongoing support, monitoring, and continuous improvement.",
    tags: ["24/7", "SLA"],
    featured: false
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Solutions"
          title="AI Engineering Solutions for Modern Businesses"
          description="A full-stack partner across the entire product lifecycle — from idea and design to launch, scale and support."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Featured badge */}
                {s.featured && (
                  <Badge className="absolute right-4 top-4 bg-primary/10 text-primary hover:bg-primary/20">
                    <Zap className="mr-1 size-3" />
                    Featured
                  </Badge>
                )}

                <div className="relative">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all group-hover:scale-110 group-hover:from-primary/20 group-hover:to-accent/20">
                    <s.icon className="size-6" />
                  </div>

                  <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 opacity-0 transition-all group-hover:opacity-100">
                    <Button 
                      variant="link" 
                      className="h-auto p-0 text-primary cursor-pointer"
                      onClick={() => window.location.href = '/#contact'}
                    >
                      Learn More
                      <ArrowRight className="ml-1 size-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="rounded-full bg-brand text-white hover:opacity-90 hover:scale-105 cursor-pointer border-0 min-w-[200px]"
            style={{ backgroundClip: 'border-box', WebkitBackgroundClip: 'border-box' }}
            onClick={() => window.location.href = '/#contact'}
          >
            Discuss Your Project
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}