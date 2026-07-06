"use client"

import { ArrowRight, GraduationCap, Users, Briefcase, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

export function TrainingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 py-24 sm:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        
        {/* Animated code particles */}
        <div className="absolute left-1/4 top-1/4 text-2xl opacity-5 animate-float">{"</>"}</div>
        <div className="absolute right-1/3 top-1/3 text-2xl opacity-5 animate-float-delayed">{";"}</div>
        <div className="absolute left-2/3 bottom-1/4 text-2xl opacity-5 animate-float-delayed-2">{"{}"}</div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
                <Sparkles className="size-4" />
                Industry-Ready Programs
              </div>
            </Reveal>

            <Reveal>
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Become Industry-Ready,
                <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Not Just Exam-Ready
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Hands-on training programs designed around what hiring teams actually look for, 
                taught by engineers who ship real software every day.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full bg-brand text-white hover:opacity-90 hover:scale-105 cursor-pointer border-0 min-w-[180px]"
                  style={{ backgroundClip: 'border-box', WebkitBackgroundClip: 'border-box' }}
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Programs
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full min-w-[180px] cursor-pointer"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Enroll Now
                </Button>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 flex flex-wrap gap-8">
                {[
                  { icon: GraduationCap, label: "Students Trained", value: "1000+" },
                  { icon: Users, label: "Workshops", value: "20+" },
                  { icon: Briefcase, label: "Placement Rate", value: "85%" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="rounded-full bg-accent/10 p-2 text-accent">
                      <stat.icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4">
                    <div className="rounded-full bg-accent/10 p-3">
                      <GraduationCap className="size-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">MERN Stack Development</div>
                      <div className="text-sm text-muted-foreground">6 Months • Live Projects</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <GraduationCap className="size-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Data Science & AI</div>
                      <div className="text-sm text-muted-foreground">6 Months • Industry Projects</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4">
                    <div className="rounded-full bg-blue-500/10 p-3">
                      <GraduationCap className="size-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Data Analytics</div>
                      <div className="text-sm text-muted-foreground">6 Months • Business Cases</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 -top-3 size-6 rounded-full bg-accent/20 blur-xl" />
                <div className="absolute -bottom-3 -left-3 size-6 rounded-full bg-primary/20 blur-xl" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}