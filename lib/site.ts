export const siteConfig = {
  name: "CodingMitra Pvt. Ltd.",
  email: "info@codingmitra.co.in",
  phone: "+91 930 708 4168",
  phone2: "+91 814 992 2353",
  phoneHref: "+91 930 708 4168",
  phone2Href: "+91 814 992 2353",
  whatsapp: "919307084168",
  address: "Plot No. 3, Takli Sim, Near- Metro Piller No. 104, Hingna Road, Nagpur-440036, Maharashtra",
  hours: "Mon – Sat \n 9:30 AM – 7:00 PM IST",
  linkedin: "https://www.linkedin.com/company/codingmitra",
  instagram: "https://www.instagram.com/codingmitra_nagpur",
  facebook: "https://www.facebook.com/p/CodingMitra-Pvt-Ltd-100089091533140/",
}

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Internship", href: "/internship" },
  { label: "Contact", href: "/#contact" },
] as const

export const allTestimonials = [
  {
    quote:
      "Learning here is too much interactive, I have just completed my 15days of 1 month internship program and it looks amazing. The teachers are supportive and gives the assignments time to time. Moreover I will continue this for next 6 months also...",
    name: "Amey Saurkar",
    role: "Intern",
    type: "Intern",
  },
  {
    quote: "My experience is very nice",
    name: "Sakshi Thaware",
    role: "Intern",
    type: "Intern",
  },
  {
    quote: "Best experience",
    name: "Smit Ninawe",
    role: "Intern",
    type: "Intern",
  },
  {
    quote:
      "CodingMitra built our NCWE conference website with exceptional quality. The platform was delivered on time and handled all our requirements perfectly.",
    name: "Department of Applied Mechanics",
    role: "VNIT",
    type: "Client",
  },
]

export const clientTestimonials = allTestimonials.filter((t) => t.type === "Client")
export const internTestimonials = allTestimonials.filter((t) => t.type === "Intern")
