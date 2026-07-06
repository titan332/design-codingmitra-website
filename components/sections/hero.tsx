"use client"

import { motion } from "motion/react"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const badges = [
  "AI & Automation",
  "Product Engineering",
  "Training & Internships",
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* animated gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <motion.div
          className="absolute -top-24 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-32 -left-24 size-[32rem] rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex dark:bg-accent/10 dark:text-white items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground"
          >
            <Sparkles className="size-4" />
            AI-Augmented Development Studio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            We build software, products and{" "}
            <span className="text-gradient">future-ready talent</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            CodingMitra delivers custom software, web &amp; AI solutions and
            scalable products for modern businesses with combine AI speed — while training the next
            generation of engineers through industry-focused programs and
            internships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" className="rounded-full w-full sm:w-auto bg-brand text-white hover:opacity-90 hover:scale-105 cursor-pointer border-0" style={{ backgroundClip: 'border-box', WebkitBackgroundClip: 'border-box' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Consultation
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full w-full sm:w-auto"
            >
              <a href="/services">Explore Services</a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <CheckCircle2 className="size-4 text-accent" />
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/10 to-accent/20 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/hero-dashboard.png"
              alt="CodingMitra software analytics and AI automation dashboard"
              width={1024}
              height={768}
              priority
              className="h-auto w-full"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="absolute dark:border-2 dark:border-foreground/90 dark:bg-white -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-2xl font-bold text-gradient">98%</p>
            <p className="text-xs text-muted-foreground">On-time delivery</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
