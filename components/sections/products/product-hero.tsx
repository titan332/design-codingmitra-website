"use client"

// components/sections/product-hero.tsx
import { ArrowRight, Sparkles, Users, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import Link from "next/link"

export function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5 py-16 sm:py-20 sm:pt-32">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-primary/20 animate-pulse" />
        <div className="absolute right-1/3 top-1/3 h-3 w-3 rounded-full bg-accent/20 animate-pulse delay-100" />
        <div className="absolute left-2/3 bottom-1/4 h-2 w-2 rounded-full bg-blue-500/20 animate-pulse delay-200" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              Production-Ready SaaS Products
            </div>
          </Reveal>

          <Reveal>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Products We've Built,
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Trusted in Production
              </span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From AI-powered assessments to interactive coding education — 
              our products serve thousands of users and solve real-world problems.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg"
                className="rounded-full bg-brand text-white hover:opacity-90 hover:scale-105 cursor-pointer border-0 min-w-[180px]"
                style={{ backgroundClip: 'border-box', WebkitBackgroundClip: 'border-box' }}
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Products
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full min-w-[180px] cursor-pointer"
                onClick={() => window.location.href = '/#contact'}
              >
                Build Your Product
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                { icon: Users, label: "Active Users", value: "10,000+" },
                { icon: Award, label: "Rating", value: "4.9/5" },
                { icon: Zap, label: "Platforms", value: "2" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
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
      </div>
    </section>
  )
}