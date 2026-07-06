// components/sections/products.tsx
"use client"

import { ArrowRight, Check, Star, Users, Clock, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

type Product = {
  name: string
  tagline: string
  description: string
  image: string
  features: string[]
  cta: string
  status?: string
  link?: string
  metrics: {
    users: string
    rating: string
    launched: string
  }
  color: string
}

const products: Product[] = [
  {
    name: "DailyMock",
    tagline: "AI-powered online assessment platform",
    description: "Revolutionize your assessment process with AI-driven mock exams, coding tests, and detailed performance analytics.",
    image: "/product-dailymock.png",
    features: [
      "AI-powered Online Mock Exams",
      "Real-time Coding Tests",
      "Performance Analytics Dashboard",
      "Competitive Leaderboards",
      "Detailed PDF Reports",
    ],
    cta: "Visit DailyMock",
    status: "Live",
    link: "https://dailymock.com/",
    metrics: {
      users: "5,000+",
      rating: "4.8",
      launched: "2023"
    },
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "KidsMate",
    tagline: "Interactive coding platform for children",
    description: "Make coding fun and accessible for kids with gamified learning, live classes, and a comprehensive curriculum.",
    image: "/product-kidsmate.png",
    features: [
      "Live Interactive Coding Classes",
      "Gamified Coding Curriculum",
      "Parent Dashboard & Analytics",
      "Progress Tracking & Reports",
      "Project-based Learning",
      "Achievement Certificates",
    ],
    cta: "Explore KidsMate",
    status: "Live",
    link: "https://kidsmate.codingmitra.co.in/",
    metrics: {
      users: "3,000+",
      rating: "4.9",
      launched: "2024"
    },
    color: "from-purple-500 to-pink-500"
  },
]

export function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <section id="products" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="SaaS Products Built in Production"
          description="We don't just build software for others — we ship and scale our own platforms used by students, professionals, and institutions worldwide."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.15}>
              <div 
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.name)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => product.link ? window.open(product.link, '_blank') : window.location.href = '/#contact'}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`} />
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${product.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                  
                  <Image
                    src={product.image}
                    alt={`${product.name} product interface`}
                    width={1024}
                    height={640}
                    className="h-64 w-full object-cover object-top transition-transform duration-700 group-hover:scale-110 sm:h-72"
                  />
                  
                  {/* Status Badge with pulse animation */}
                  {product.status && (
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <Badge className="bg-accent text-accent-foreground shadow-lg">
                        <span className="relative flex h-2 w-2 mr-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-foreground/40" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-foreground" />
                        </span>
                        {product.status}
                      </Badge>
                    </div>
                  )}

                  {/* Quick metrics overlay on hover */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 transition-opacity duration-300 ${hoveredProduct === product.name ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-around text-white">
                      <div className="text-center">
                        <div className="text-sm font-bold">{product.metrics.users}</div>
                        <div className="text-xs opacity-80">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold flex items-center justify-center gap-0.5">
                          {product.metrics.rating}
                          <Star className="size-3 fill-yellow-400 text-yellow-400" />
                        </div>
                        <div className="text-xs opacity-80">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold">v1.0</div>
                        <div className="text-xs opacity-80">Launched</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-2xl font-bold group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {product.tagline}
                      </p>
                    </div>
                    <div className={`rounded-full bg-gradient-to-r ${product.color} p-0.5`}>
                      <div className="rounded-full bg-card p-1.5">
                        <div className={`rounded-full bg-gradient-to-r ${product.color} p-1`}>
                          <div className="size-5 rounded-full bg-card" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <ul className="mt-6 grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
                    {product.features.slice(0, 6).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground/80 transition-all hover:text-foreground"
                      >
                        <div className={`rounded-full bg-gradient-to-r ${product.color} p-0.5`}>
                          <Check className="size-3 text-white" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-4">
                    {product.link ? (
                      <a 
                        href={product.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                      >
                        <Button 
                          className={`w-full bg-gradient-to-r ${product.color} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
                        >
                          {product.cta}
                          <ExternalLink className="ml-2 size-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        className={`w-full bg-gradient-to-r ${product.color} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
                        onClick={() => window.location.href = '/#contact'}
                      >
                        {product.cta}
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Upcoming Products Banner */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/50 to-primary/5 p-8 text-center transition-all hover:border-primary/30 hover:shadow-xl">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            
            <div className="relative">
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                Coming Soon
              </Badge>
              <h3 className="text-xl font-bold">More Products on the Way</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
                Our platform is built to grow with your needs. We're constantly developing 
                new solutions to solve emerging challenges.
              </p>
              <Button 
                variant="outline" 
                className="mt-4 rounded-full min-w-[180px] cursor-pointer"
                onClick={() => window.location.href = '/#contact'}
              >
                Suggest a Product
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}