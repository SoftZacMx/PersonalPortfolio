"use client"

import { Code2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    // Replace FILE_ID with your actual Google Drive file ID
    // Example: If your link is https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing
    // Then FILE_ID is: 1ABC123xyz

    const downloadUrl = `https://drive.google.com/file/d/1q2NZtNsI0LiS7ix2FcPGSsuKYSk_Jj_5/view?usp=sharing`

    window.open(downloadUrl, "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">Brayan Rodriguez</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-105 inline-block"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-105 inline-block"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "#skills")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-105 inline-block"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-105 inline-block"
            >
              Contact
            </a>
          </nav>

          <Button
            onClick={handleDownloadCV}
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </div>
      </div>
    </header>
  )
}
