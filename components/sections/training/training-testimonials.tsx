// components/sections/training-testimonials.tsx
import { Reveal } from "@/components/reveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Amit Patel",
    role: "Full Stack Developer",
    company: "TCS",
    content: "The MERN stack training was incredible. I went from knowing basic HTML to building full-stack applications in 4 months. The mentorship was outstanding.",
    rating: 5,
    avatar: "A"
  },
  {
    name: "Priya Sharma",
    role: "Data Analyst",
    company: "Accenture",
    content: "The Data Analytics program gave me practical skills that directly translated to my job. The real-world projects were exactly what employers are looking for.",
    rating: 5,
    avatar: "P"
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist",
    company: "Amazon",
    content: "The Data Science curriculum was comprehensive and up-to-date with industry standards. The placement support helped me land my dream job.",
    rating: 5,
    avatar: "R"
  }
]

export function TrainingTestimonials() {
  return (
    <section className="bg-secondary/5 py-20 sm:py-28">
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
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-accent/30 hover:shadow-xl cursor-pointer">
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