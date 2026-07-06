"use client"

import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { type FormEvent, useState } from "react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/site"

const interests = [
  "Software Development",
  "Web Development",
  "AI Solutions / Automation",
  "MVP / Product Development",
  "Training / Internship",
  "College Partnership",
]

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
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

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
              {submitted ? (
                <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-14 text-accent" />
                  <h3 className="mt-4 font-heading text-xl font-semibold">
                    Thank you — message received!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Our team will reach out within one business day. For urgent
                    queries, message us on WhatsApp.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">I&apos;m interested in</Label>
                      <select
                        id="interest"
                        name="interest"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {interests.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals or training needs..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Send Message
                    <Send className="size-4" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by CodingMitra
                    regarding your enquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
