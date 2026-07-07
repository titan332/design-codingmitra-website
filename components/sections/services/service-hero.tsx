"use client"

// components/sections/service-hero.tsx
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import Link from "next/link"

export function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5 py-16 sm:py-20 sm:pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                AI-Powered Solutions
              </div>
            </Reveal>

            <Reveal>
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build the Future with
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}AI Engineering
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                From concept to deployment, we deliver cutting-edge software solutions
                that leverage artificial intelligence to solve complex business challenges
                and drive measurable growth.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-brand text-white hover:opacity-90 hover:scale-105 cursor-pointer border-0 min-w-[180px]"
                  style={{ backgroundClip: 'border-box', WebkitBackgroundClip: 'border-box' }}
                  onClick={() => window.location.href = '/#contact'}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full min-w-[180px] cursor-pointer"
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Solutions
                </Button>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 flex items-center gap-8">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="size-4 text-primary" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="size-4 text-accent" />
                  <span>Scalable Infrastructure</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Projects Delivered", value: "25+", color: "primary" },
                    { label: "Client Satisfaction", value: "98%", color: "accent" },
                    { label: "Avg. Time to Market", value: "60 Days", color: "blue" },
                    { label: "AI Integration", value: "85%", color: "purple" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-border bg-card/50 p-4 text-center transition-all hover:scale-105 hover:border-primary/20"
                    >
                      <div className={`text-2xl font-bold text-${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -right-3 -top-3 size-6 rounded-full bg-primary/20 blur-xl" />
                <div className="absolute -bottom-3 -left-3 size-6 rounded-full bg-accent/20 blur-xl" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}