// app/training/page.tsx
import type { Metadata } from "next"
import { Training } from "@/components/sections/training/training"
import { TrainingHero } from "@/components/sections/training/training-hero"
import { TrainingStats } from "@/components/sections/training/training-stats"
import { TrainingTestimonials } from "@/components/sections/training/training-testimonials"
import { TrainingProcess } from "@/components/sections/training/training-process"

export const metadata: Metadata = {
  title: "Training & Internships | Industry-Ready Programs",
  description: "Join our industry-focused training programs in MERN Stack, Data Science, and more. Get hands-on experience, mentorship, and placement support.",
}

export default function TrainingPage() {
  return (
    <main>
      <TrainingHero />
      {/* <TrainingStats /> */}
      <Training />
      <TrainingProcess />
      <TrainingTestimonials />
    </main>
  )
}