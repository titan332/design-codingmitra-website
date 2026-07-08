"use client"

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site"

const details = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: `${siteConfig.phone}\n${siteConfig.phone2}`,
    href: `tel:${siteConfig.phoneHref}`,
  },
  { 
    icon: MapPin, 
    label: "Address", 
    value: siteConfig.address, 
    href: "https://maps.app.goo.gl/6ZFZ1rv7kF8n2wL59" 
  },
  { icon: Clock, label: "Business Hours", value: siteConfig.hours },
]

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your project"
          description="Tell us what you're building or learning, and our team will get back to you within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {details.map((d) => {
                  const content = (
                    <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                        <d.icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {d.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium whitespace-pre-line">{d.value}</p>
                      </div>
                    </div>
                  )
                  return d.href ? (
                    <a key={d.label} href={d.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={d.label}>{content}</div>
                  )
                })}
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="CodingMitra office location"
                  src="https://www.google.com/maps?q=CodingMitra+Pvt.+Ltd.&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
