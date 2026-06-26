import {
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Rocket,
  ShoppingCart,
  Truck,
  Users,
  Wrench,
} from "lucide-react"
import { Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Landmark, label: "FinTech" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Building2, label: "Real Estate" },
  { icon: Wrench, label: "Manufacturing" },
  { icon: Truck, label: "Logistics" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Rocket, label: "Startups" },
  { icon: Users, label: "Professional Services" },
]

export function Industries() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for Every Industry"
          description="We bring domain awareness to every build — shipping software that fits the way your industry actually works."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => (
            <StaggerItem key={ind.label}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <ind.icon className="size-6" />
                </span>
                <span className="text-sm font-medium">{ind.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
