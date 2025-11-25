"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []

    // Create particles for data stream effect
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 15, 20, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(212, 175, 55, 0.3)"
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 150)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* US Map subtle background */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 959 593" className="w-full h-full" fill="currentColor">
          <path
            d="M833.99,571.68L833.83,571.9L833.64,571.87L833.47,571.78L833.3,571.64L833.07,571.58L832.87,571.48L832.67,571.44L832.48,571.46L832.29,571.52L832.04,571.5L831.83,571.42L831.62,571.37L831.42,571.27L831.18,571.21L830.97,571.18L830.76,571.1L830.54,571.05L830.33,571.01L830.12,570.93L829.89,570.87L829.67,570.78L829.44,570.71L829.22,570.6L828.99,570.5L828.78,570.42L828.56,570.31L828.34,570.19L828.11,570.06L827.89,569.93L827.67,569.81L827.45,569.67L827.22,569.55L826.99,569.41L826.78,569.28L826.55,569.13L826.33,568.99L826.1,568.84L825.88,568.68L825.65,568.53L825.43,568.36L825.2,568.2L824.97,568.03L824.75,567.85L824.52,567.68L824.29,567.5L824.07,567.32L823.84,567.13L823.61,566.94L823.39,566.75L823.16,566.56L822.93,566.36L822.7,566.16L822.47,565.96L822.24,565.76L822.02,565.55L821.79,565.34L821.56,565.13L821.33,564.92L821.1,564.7L820.87,564.49L820.64,564.27L820.41,564.05L820.18,563.83L819.95,563.61L819.72,563.38L819.49,563.16L819.26,562.93L819.03,562.7L818.8,562.47L818.57,562.24L818.34,562.01L818.11,561.77L817.88,561.54L817.65,561.3L817.42,561.06L817.19,560.82L816.96,560.58L816.73,560.34L816.5,560.1L816.27,559.85L816.04,559.61L815.81,559.36L815.58,559.11L815.35,558.87L815.12,558.62L814.89,558.37L814.66,558.12L814.43,557.87L814.2,557.62"
            className="text-primary/20"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Real-Time Data Pipeline Active</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Real-Time Distressed</span>
          <br />
          <span className="text-gold-gradient">Property Leads</span>
          <br />
          <span className="text-foreground">Across the USA</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
          Access verified, up-to-the-minute foreclosure, probate, missed-payment, and bankruptcy leads before anyone
          else. <span className="text-foreground font-medium">Every state. Every county. Every day.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-semibold group"
            >
              Get Leads Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/leads/sample">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary h-14 px-8 text-lg bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              See Sample Leads
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "2.5M+", label: "Leads Delivered" },
            { value: "3,143", label: "Counties Covered" },
            { value: "< 15min", label: "Avg. Lead Freshness" },
            { value: "98.7%", label: "Data Accuracy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gold-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
