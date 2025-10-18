"use client"
import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" className="py-24 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p>
                I am a web developer with experience in <span className="text-primary font-semibold">Node.js</span>,{" "}
                <span className="text-primary font-semibold">React</span>,{" "}
                <span className="text-primary font-semibold">Angular</span>, and{" "}
                <span className="text-primary font-semibold">MySQL</span>. My focus is on creating{" "}
                <span className="text-primary font-semibold">scalable and efficient solutions</span>, with a strong
                emphasis on developing <span className="text-primary font-semibold">customized ERPs</span> and{" "}
                <span className="text-primary font-semibold">integrating AI</span> to optimize business processes.
              </p>
              <p>
                With a deep passion for <span className="text-primary font-semibold">technology and innovation</span>, I
                specialize in designing{" "}
                <span className="text-primary font-semibold">intuitive and dynamic systems</span>, always striving to
                deliver real value to users and clients. My goal is to continue growing professionally and contribute
                with creative, high-impact solutions.
              </p>
            </div>
          </div>

          <div
            className={`relative aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XArCHkwz8XU"
              title="Developer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
