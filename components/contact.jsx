"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // IMPORTANT: When updating href values, always include the full URL with https://
  // Example: "https://linkedin.com/in/yourusername" NOT "linkedin.com/in/yourusername"
  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "@SoftZac",
      href: "https://github.com/SoftZacMx", // Full URL with https://
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Brayan Rodriguez",
      href: "https://www.linkedin.com/in/brayan-alexis-rodriguez-ramirez", // Full URL with https://
      color: "hover:text-primary",
    },
    {
      icon: Mail,
      label: "Email",
      value: "isc.rodriguez.brayan@gmail.com",
      href: "mailto:isc.rodriguez.brayan@gmail.com", // mailto: for email
      color: "hover:text-primary",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        <div
          className={`relative rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 p-12 border border-primary/20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div
            className={`text-center mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-4">Let's Build Together</h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to connect? Reach out through any of these channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
              
                  className={`group relative bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105 ${contact.color} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 transition-all duration-300">{contact.label}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
