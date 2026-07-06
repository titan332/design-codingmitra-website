// components/sections/service-testimonials.tsx
import { Reveal } from "@/components/reveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVentures",
    content: "They transformed our legacy system into a modern AI-powered platform. Our operational efficiency increased by 60%.",
    rating: 5,
    image: "S"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Director, HealthAI",
    content: "The MVP they built for us in just 6 weeks helped us secure our Series A funding. Absolutely exceptional work.",
    rating: 5,
    image: "M"
  },
  {
    name: "Emily Thompson",
    role: "CEO, SmartRetail",
    content: "Their AI automation solution saved us thousands of hours annually. Best investment we ever made.",
    rating: 5,
    image: "E"
  },
]

export function ServiceTestimonials() {
  return (
    <section className="bg-secondary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium text-primary">Testimonials</span>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Real results from real partnerships. Here's what our clients have to say.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed">{testimonial.content}</p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 font-semibold text-primary">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}