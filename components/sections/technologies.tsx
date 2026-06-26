"use client"

import { motion } from "motion/react"
import { SectionHeading } from "@/components/section-heading"

const techs = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Docker",
  "Git",
  "GitHub",
  "Python",
  "Java",
  "Tailwind CSS",
  "AI",
]

export function Technologies() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies we work with"
          description="A modern, battle-tested toolkit chosen for performance, scalability and long-term maintainability."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3"
        >
          {techs.map((t, i) => (
            <motion.span
              key={t}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -4 }}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground/80 shadow-sm transition-colors hover:border-accent/50 hover:text-foreground"
              style={{
                fontSize: `${0.9 + ((i % 4) * 0.08)}rem`,
              }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
