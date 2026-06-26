import {
  Boxes,
  BrainCircuit,
  GaugeCircle,
  Headphones,
  Layers,
  RefreshCcw,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const reasons = [
  { icon: Users, title: "Experienced Team", body: "Senior engineers who have shipped real products at scale." },
  { icon: GaugeCircle, title: "Industry-Focused Training", body: "Curriculum mapped to what employers actually hire for." },
  { icon: Layers, title: "Real Client Projects", body: "Production work, not sandbox demos or copy-paste tutorials." },
  { icon: RefreshCcw, title: "Agile Development", body: "Iterative delivery with weekly demos and full transparency." },
  { icon: BrainCircuit, title: "AI Expertise", body: "Deep experience integrating AI and automation into products." },
  { icon: Boxes, title: "End-to-End Development", body: "From discovery and design to deployment and support." },
  { icon: Headphones, title: "Dedicated Support", body: "Responsive teams and clear communication you can rely on." },
  { icon: Sparkles, title: "Modern Technologies", body: "A current, future-proof stack — never legacy by default." },
  { icon: ServerCog, title: "Scalable Architecture", body: "Systems engineered to grow with your business." },
  { icon: ShieldCheck, title: "Quality Assurance", body: "Testing, reviews and standards baked into every release." },
]

export function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why CodingMitra"
          title="What Makes Us Different"
          description="A partner that combines real engineering depth with a genuine commitment to building people, not just products."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <r.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading font-semibold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
