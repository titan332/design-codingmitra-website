"use client"

import { AnimatePresence, motion } from "motion/react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

type Testimonial = {
  quote: string
  name: string
  role: string
  type: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "CodingMitra delivered our MVP ahead of schedule and the quality was exceptional. They felt like an extension of our own team.",
    name: "Rahul Mehta",
    role: "Founder, FinTech Startup",
    type: "Client",
  },
  {
    quote:
      "The MERN program completely changed my career. Working on real projects gave me the confidence to crack my first developer job.",
    name: "Sneha Patil",
    role: "Software Engineer",
    type: "Student",
  },
  {
    quote:
      "Their team partnered with our college for internships and workshops. Our students gained genuine industry exposure and placements improved.",
    name: "Dr. A. Sharma",
    role: "Placement Head, Engineering College",
    type: "College",
  },
  {
    quote:
      "We rebuilt our legacy platform with CodingMitra and saw a real jump in performance and reliability. Highly recommended.",
    name: "Priya Nair",
    role: "Product Manager, E-commerce",
    type: "Client",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [],
  )
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[index]

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by clients, students and colleges"
          description="Real outcomes from the businesses we build for and the learners we help grow."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-12">
            <Quote className="size-10 text-accent/40" />
            <div className="mt-4 min-h-44 sm:min-h-36">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-pretty sm:text-xl">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-heading font-semibold text-primary">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.role} · {t.type}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Previous testimonial"
              onClick={prev}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-accent"
                      : "w-2 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Next testimonial"
              onClick={next}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
