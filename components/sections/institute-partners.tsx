// components/sections/institute-partners.tsx
"use client"

import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const institutes = [
  { name: "Symbiosis Institute of Technology, Nagpur", location: "Nagpur, Maharashtra", logo: "/symbiosis.jpg" },
  { name: "Priyadarshini College of Engineering", location: "Nagpur, Maharashtra", logo: "/priyadarshini.webp" },
  { name: "St. Vincent Pallotti College of Engineering", location: "Nagpur, Maharashtra", logo: "/vincent.webp" },
  { name: "G H Raisoni College of Engineering and Management", location: "Nagpur, Maharashtra", logo: "/raisoni.jpg" },
  { name: "S B Jain Institute of Technology Management and Research", location: "Nagpur, Maharashtra", logo: "/sbjain.webp" },
  { name: "Cummins College of Engineering", location: "Pune, Maharashtra", logo: "/cummins.jpg" },
  { name: "City Premier College of Management", location: "Nagpur, Maharashtra", logo: "/cpc.jpg" },
  { name: "Tirpude College of Management", location: "Nagpur, Maharashtra", logo: "/tirpude.webp" },
  { name: "Vidarbha Institute of Technology", location: "Nagpur, Maharashtra", logo: "/vidarbha.webp" },
  { name: "Priyadarshini Bhagwati College of Engineering", location: "Nagpur, Maharashtra", logo: "/priyadarshini-bhagwati.webp" },
  { name: "Department of Applied Mechanics, VNIT Nagpur", location: "Nagpur, Maharashtra", logo: "/vnit-applied-mechanics.webp" },
  { name: "Department of Civil Engineering, VNIT Nagpur", location: "Nagpur, Maharashtra", logo: "/vnit-civil.webp" },
]

export function InstitutePartners() {
  return (
    <section id="institute-partners" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
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
                <div className="group rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="rounded-full bg-white p-4">
                      <img
                        src={institute.logo}
                        alt={institute.name}
                        className="size-24 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold leading-tight group-hover:text-primary transition-colors">
                        {institute.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {institute.location}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  )
}
