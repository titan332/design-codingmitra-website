import type { Metadata } from "next"
import { Training } from "@/components/sections/training"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Training & Internships",
  description: "Industry-focused training programs and internships in MERN Stack, Java Full Stack, Python, Data Science, AI, and more. Become job-ready with real projects.",
}

export default function TrainingPage() {
  return (
    <main>
      <Training />
      
      <CtaBanner />
    </main>
  )
}
