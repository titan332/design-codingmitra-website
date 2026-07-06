import { Counter } from "@/components/counter"
import { Stagger, StaggerItem } from "@/components/reveal"

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years of Excellence" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 1000, suffix: "+", label: "Students Trained" },
]

export function Stats() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
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
