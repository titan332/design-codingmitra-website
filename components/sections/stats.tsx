import { Counter } from "@/components/counter"
import { Stagger, StaggerItem } from "@/components/reveal"

const stats = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years of Excellence" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 1000, suffix: "+", label: "Students Trained" },
]

export function Stats() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="flex gap-4 overflow-x-auto pb-4 sm:justify-center sm:overflow-visible">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="min-w-[140px] flex-shrink-0 rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg sm:min-w-[160px]">
                <p className="font-heading text-4xl font-extrabold text-gradient sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
