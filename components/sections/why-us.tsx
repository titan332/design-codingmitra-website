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
    <section id="why" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section with Image Space */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
          <div className="flex-1">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground ring-1 ring-inset ring-accent/20">
              WHY CODINGMITRA
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              What Makes Us Different
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              A partner that combines real engineering depth with AI-powered development to fast-track your product—without compromising quality, scalability, or long-term reliability.
            </p>
            <div className="mt-6 w-20 h-1 bg-accent rounded-full"></div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
            <img 
              src="/ideas-to-products.png" 
              alt="Ideas to Products Illustration" 
              className="w-full max-w-md h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* WITH THE POWER OF Section */}
        <div className="mb-10">
          <h3 className="text-2xl sm:text-3xl text-center font-heading font-bold text-foreground">
            With The Power Of
          </h3>
        </div>

        {/* Cards Grid */}
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
