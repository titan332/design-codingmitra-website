// components/sections/training.tsx
"use client"

import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  GraduationCap,
} from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"

const courses = [
  {
    title: "Full Stack Web Development (MERN)",
    duration: "6 Months",
    level: "Intermediate",
    topics: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React.js & Redux for frontend",
      "Node.js & Express.js for backend",
      "MongoDB database management",
      "RESTful API development",
      "Authentication & Authorization",
      "Git version control",
      "Deployment with Vercel/Netlify",
    ],
    color: "from-blue-500 to-cyan-500",
    jobs: ["Full Stack Developer", "Frontend Developer", "Backend Developer"]
  },
  {
    title: "Master In Data Science",
    duration: "6 Months",
    level: "Advanced",
    topics: [
      "Python programming fundamentals",
      "NumPy & Pandas for data manipulation",
      "Matplotlib & Seaborn visualization",
      "Machine Learning with Scikit-learn",
      "Deep Learning with TensorFlow/Keras",
      "Natural Language Processing",
      "Data analysis & statistics",
      "Real-world project implementations",
    ],
    color: "from-purple-500 to-pink-500",
    jobs: ["Data Scientist", "ML Engineer", "AI Researcher"]
  },
  {
    title: "Data Analytics",
    duration: "6 Months",
    level: "Beginner",
    topics: [
      "Excel & Advanced Excel",
      "SQL database querying",
      "Power BI & Tableau dashboards",
      "Data cleaning & preprocessing",
      "Statistical analysis methods",
      "Business intelligence reporting",
      "Data storytelling techniques",
      "Industry case studies",
    ],
    color: "from-green-500 to-emerald-500",
    jobs: ["Data Analyst", "Business Analyst", "BI Developer"]
  },
]

const benefits = [
  {
    icon: Code2,
    title: "Real client projects",
    body: "Work on live, production-grade codebases — not throwaway tutorials.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "1:1 mentorship",
    body: "Guidance from working engineers who review your code and PRs.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Verified certificates",
    body: "Industry-recognized certificates and detailed performance reports.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement support",
    body: "CRT, mock interviews and college partnerships that lead to jobs.",
    color: "from-orange-500 to-red-500"
  },
]


export function Training() {
  const [activeCourse, setActiveCourse] = useState<number | null>(null)

  return (
    <section id="training" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Internships"
          title="Industry-Ready Programs"
          description="Hands-on programs designed around what hiring teams actually look for, taught by engineers who ship real software every day."
        />

        <Reveal className="mt-14">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-heading text-2xl font-semibold">
              Internship Programs we offer
            </h3>
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
              <Clock className="mr-1 size-3" />
              Limited Seats
            </Badge>
          </div>

          <Stagger className="grid gap-6 lg:grid-cols-3">
            {courses.map((course, index) => (
              <StaggerItem key={course.title}>
                <div
                  className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:shadow-xl"
                  onMouseEnter={() => setActiveCourse(index)}
                  onMouseLeave={() => setActiveCourse(null)}
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10 rounded-2xl`} />

                  <div className="relative flex h-full flex-col">
                    <div className="mt-4 flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {course.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>

                    <h4 className="mt-3 font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                      {course.title}
                    </h4>

                    <ul className="mt-4 space-y-2">
                      {course.topics.slice(0, 5).map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle className="mt-0.5 size-4 text-accent shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {course.topics.length > 5 && (
                        <li className="text-sm text-muted-foreground">
                          +{course.topics.length - 5} more topics
                        </li>
                      )}
                    </ul>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {course.jobs.map((job) => (
                        <span key={job} className="rounded-full bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground">
                          {job}
                        </span>
                      ))}
                    </div>

                    <Button
                      className={`mt-auto w-full border-0 bg-gradient-to-r ${course.color} text-white hover:scale-105 transition-all shadow-lg hover:shadow-xl cursor-pointer`}
                      onClick={() => window.location.href = '/#contact'}
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal className="mt-20">
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-semibold">
              Why choose us
            </h3>
          </div>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
                  <div className={`inline-flex rounded-xl bg-gradient-to-r ${b.color} p-3 text-white`}>
                    <b.icon className="size-5" />
                  </div>
                  <h4 className="mt-4 font-heading font-semibold group-hover:text-primary transition-colors">
                    {b.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  )
}