"use client"

import { CheckCircle2, Send } from "lucide-react"
import { type FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const interests = [
  "Software Development",
  "Web Development",
  "AI Solutions / Automation",
  "MVP / Product Development",
  "Training / Internship",
  "College Partnership",
]

interface ContactFormData {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  function validateForm(): boolean {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validateForm()) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        const result = await response.json()

        if (result.success) {
          setSubmitted(true)
        } else {
          setErrors(prev => ({ ...prev, message: 'Failed to send message. Please try again.' }))
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        setErrors(prev => ({ ...prev, message: 'Failed to send message. Please try again.' }))
      }
    }
  }

  function handleReset() {
    setSubmitted(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    })
    setErrors({})
  }

  if (submitted) {
    return (
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
          onClick={handleReset}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormItem>
          <FormLabel htmlFor="name">Full name</FormLabel>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <FormMessage error>{errors.name}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <FormMessage error>{errors.email}</FormMessage>}
        </FormItem>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormItem>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+91 00000 00000"
          />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="interest">I&apos;m interested in</FormLabel>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={(e) => handleChange("interest", e.target.value)}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-card dark:text-foreground dark:border-border appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
            }}
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
        </FormItem>
      </div>
      <FormItem>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          placeholder="Tell us about your project, goals or training needs..."
          aria-invalid={!!errors.message}
        />
        {errors.message && <FormMessage error>{errors.message}</FormMessage>}
      </FormItem>
      <Button 
        type="submit" 
        size="lg" 
        className="w-full rounded-full cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Send Message
        <Send className="size-4 ml-2" />
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to be contacted by CodingMitra
        regarding your enquiry.
      </p>
    </form>
  )
}
