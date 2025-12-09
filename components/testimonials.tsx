"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "CookinForeclosures has completely transformed my wholesaling business. The missed payment alerts give me access to deals 3-4 weeks before my competitors even know they exist.",
    author: "Marcus Chen",
    role: "Real Estate Investor",
    location: "Austin, TX",
  },
  {
    quote:
      "The data accuracy is incredible. 98% of the leads I pull have valid contact information. That alone saves me 20+ hours a week in skip tracing.",
    author: "Jennifer Rodriguez",
    role: "Wholesaler",
    location: "Miami, FL",
  },
  {
    quote:
      "As a broker specializing in distressed properties, CookinForeclosures is my secret weapon. The probate and bankruptcy leads are unmatched in quality.",
    author: "David Thompson",
    role: "Licensed Broker",
    location: "Phoenix, AZ",
  },
  {
    quote:
      "I've tried every lead service out there. CookinForeclosures delivers the freshest data at the most competitive price. It's a no-brainer for serious investors.",
    author: "Sarah Mitchell",
    role: "Investment Fund Manager",
    location: "Denver, CO",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="text-gold-gradient">Investors</span>
          </h2>
          <p className="text-muted-foreground">See what our clients have to say</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{testimonials[current].author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[current].role} · {testimonials[current].location}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
