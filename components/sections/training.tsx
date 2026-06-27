"use client"

import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Users,
} from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "Full Stack Web Development (MERN)",
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
  },
  {
    title: "Master In Data Science",
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
  },
  {
    title: "Data Analytics",
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
  },
]

const benefits = [
  {
    icon: Code2,
    title: "Real client projects",
    body: "Work on live, production-grade codebases — not throwaway tutorials.",
  },
  {
    icon: Users,
    title: "1:1 mentorship",
    body: "Guidance from working engineers who review your code and PRs.",
  },
  {
    icon: Award,
    title: "Verified certificates",
    body: "Industry-recognized certificates and detailed performance reports.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement support",
    body: "CRT, mock interviews and college partnerships that lead to jobs.",
  },
]

const institutes = [
  {
    name: "Symbiosis Institute of Technology, Nagpur",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/symbiosis.png",
  },
  {
    name: "Priyadarshini College of Engineering",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/priyadarshini.png",
  },
  {
    name: "St. Vincent Pallotti College of Engineering",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/st-vincent.png",
  },
  {
    name: "G H Raisoni College of Engineering and Management",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/raisoni.png",
  },
  {
    name: "S B Jain Institute of Technology Management and Research",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/sb-jain.png",
  },
  {
    name: "Cummins College of Engineering",
    location: "Pune, Maharashtra",
    logo: "/institutes/cummins.png",
  },
  {
    name: "City Premier College of Management",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/city-premier.png",
  },
  {
    name: "Tirpude College of Management",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/tirpude.png",
  },
  {
    name: "Vidarbha Institute of Technology",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/vidarbha.png",
  },
  {
    name: "Priyadarshini Bhagwati College of Engineering",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/bhagwati.png",
  },
  {
    name: "Department of Applied Mechanics, VNIT Nagpur",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/vnit-applied.png",
  },
  {
    name: "Department of Civil Engineering, VNIT Nagpur",
    location: "Nagpur, Maharashtra",
    logo: "/institutes/vnit-civil.png",
  },
]

export function Training() {
  return (
    <section id="training" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training & Internships"
          title="Become industry-ready, not just exam-ready"
          description="Hands-on programs designed around what hiring teams actually look for, taught by engineers who ship real software every day."
        />

        <Reveal className="mt-14">
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-semibold">
              Programs we offer
            </h3>
          </div>
          <Stagger className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {courses.map((course) => (
              <StaggerItem key={course.title}>
                <div className="min-w-[320px] flex-1 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15">
                    <Code2 className="size-6 text-accent-foreground" />
                  </div>
                  <h4 className="mt-4 font-heading font-semibold">{course.title}</h4>
                  <ul className="mt-4 space-y-2">
                    {course.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <span className="mt-1.5 flex size-1 shrink-0 rounded-full bg-accent" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8 flex justify-center">
            <Button className="rounded-full bg-brand text-white hover:opacity-90 hover:scale-105 cursor-pointer border-0" style={{ backgroundClip: 'border-box', WebkitBackgroundClip: 'border-box' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Programs
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-semibold">
              Why choose us
            </h3>
          </div>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                    <b.icon className="size-5" />
                  </span>
                  <h4 className="mt-4 font-heading font-semibold">{b.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal className="mt-20">
          <div className="text-center">
            <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
              Our Institute Partners
            </h3>
            <p className="mt-3 text-muted-foreground">
              Trusted by leading educational institutions across Maharashtra
            </p>
          </div>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {institutes.map((institute) => (
              <StaggerItem key={institute.name}>
                <div className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lg">
                  {institute.logo ? (
                    <div className="flex size-12 items-center justify-center rounded-lg bg-white">
                      <img
                        src={institute.logo}
                        alt={institute.name}
                        className="size-10 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex size-12 items-center justify-center rounded-lg bg-accent/15">
                      <Award className="size-6 text-accent-foreground" />
                    </div>
                  )}
                  <h4 className="mt-4 font-heading text-sm font-semibold leading-tight">
                    {institute.name}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {institute.location}
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
