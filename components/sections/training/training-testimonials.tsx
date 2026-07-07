// components/sections/training-testimonials.tsx
import { Reveal } from "@/components/reveal"
import { Star } from "lucide-react"
import { internTestimonials } from "@/lib/site"

type TrainingTestimonial = {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const trainingTestimonials: TrainingTestimonial[] = internTestimonials.map((t: any) => ({
  name: t.name,
  role: t.role,
  company: "CodingMitra",
  content: t.quote,
  rating: 5,
  avatar: t.name.charAt(0),
}))

export function TrainingTestimonials() {
  return (
    <section className="bg-secondary/5 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium text-accent">Success Stories</span>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Real stories from students who transformed their careers through our programs.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainingTestimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <div className="group h-full w-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-accent/30 hover:shadow-xl cursor-pointer">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary font-semibold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-accent">{testimonial.company}</div>
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