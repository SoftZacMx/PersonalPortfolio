"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const animationClass = mounted && isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/background.jpg')",
          }}
        />
        {/* Lighter gradient overlay to let background show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

        {/* Animated decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 transition-all duration-700 ${animationClass}`}
        >
          <span className="text-sm text-primary">Full-Stack Developer & Innovator</span>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 text-balance transition-all duration-700 delay-200 ${animationClass}`}
        >
          Crafting Digital Experiences
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance transition-all duration-700 delay-300 ${animationClass}`}
        >
          Building seamless, scalable, and user-centric web solutions from concept to deployment.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${animationClass}`}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/20 hover:bg-foreground/5 bg-transparent hover:scale-105 transition-transform"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
