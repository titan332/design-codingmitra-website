import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What services does CodingMitra offer?",
    a: "We deliver custom software, web and mobile development, AI solutions and automation, MVP and product development, CMS and SaaS builds, UI/UX design, cloud deployment, and technical consulting — plus our own software products and training programs.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Absolutely. We work with startups, SMEs, enterprises and educational institutions. Whether you need an MVP to validate an idea or a full product team, we tailor our engagement to your stage and budget.",
  },
  {
    q: "How do your training and internship programs work?",
    a: "Our programs are hands-on and project-based. You learn modern stacks like MERN, Java Full Stack, Python and AI by building real applications, mentored by working engineers, with certificates and placement support on completion.",
  },
  {
    q: "Do you partner with colleges and universities?",
    a: "Yes. We collaborate with educational institutions for industry-focused training, workshops, internships and placement support. Reach out through the contact form to discuss a partnership.",
  },
  {
    q: "How quickly can you start a project?",
    a: "After an initial consultation to understand your goals, we typically share a proposal and timeline within a few days and can kick off shortly after. Book a free consultation to get started.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We offer maintenance, monitoring and continuous improvement plans so your software stays secure, fast and up to date long after launch.",
  },
]

export function Faq() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about working with CodingMitra. Can't find an answer? Just reach out."
        />

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card mb-3 px-5"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
