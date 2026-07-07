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
      "The internship has been a great learning experience. In just 15 days, I've worked on real-world tasks, improved my technical skills, and gained valuable industry exposure. The mentors are supportive, provide timely guidance, and encourage continuous learning. I'm excited to continue my internship journey over the next six months.",
    name: "Amey Saurkar",
    role: "Intern",
    type: "Intern",
  },
  {
    quote: "My internship experience has been very enjoyable and rewarding.",
    name: "Sakshi Thaware",
    role: "Intern",
    type: "Intern",
  },
  {
    quote: "Best internship experience with a supportive team and a positive learning environment.",
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

  // New Testimonials

  {
    quote:
      "The internship provided an excellent learning environment where I gained practical experience, worked on real projects, and improved my technical skills in a short time.",
    name: "Monika Bidwaik",
    role: "Intern",
    type: "Intern",
  },
  {
    quote:
      "A great internship experience with the CodingMitra team. Working on practical tasks helped me strengthen my skills and build confidence in software development.",
    name: "Sujay Das",
    role: "Intern",
    type: "Intern",
  },
  {
    quote:
      "The internship offered hands-on experience in frontend development through real-world assignments. It was a valuable journey that significantly improved my confidence and practical knowledge.",
    name: "Aachal Ghivtunde",
    role: "Intern",
    type: "Intern",
  },
];

export const clientTestimonials = allTestimonials.filter((t) => t.type === "Client")
export const internTestimonials = allTestimonials.filter((t) => t.type === "Intern")
