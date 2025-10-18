"use client"

import { Code2, Database, GitBranch, Cloud, Box } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "HTML & CSS", icon: Code2, percentage: 95 },
  { name: "JavaScript", icon: Code2, percentage: 90 },
  { name: "TypeScript", icon: Code2, percentage: 85 },
  { name: "React & Next.js", icon: Box, percentage: 88 },
  { name: "Node.js", icon: Box, percentage: 88 },
  { name: "SQL & NoSQL", icon: Database, percentage: 80 },
  { name: "Cloud Services", icon: Cloud, percentage: 75 },
  { name: "Git & CI/CD", icon: GitBranch, percentage: 80 },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
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

  return (
    <section id="skills" className="py-24 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">My ever-growing toolkit for building robust applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className={`p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{skill.percentage}%</span>
                </div>

                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : "0%",
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
