"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

const leadProducts = [
  { name: "Wholesale Leads", href: "/leads/wholesale" },
  { name: "Purchase Leads", href: "/leads/purchase" },
  { name: "Probate Leads", href: "/leads/probate" },
  { name: "Stop Sale Leads", href: "/leads/stop-sale" },
  { name: "Bankruptcy Gold", href: "/leads/bankruptcy" },
  { name: "Missed-Payment Alerts", href: "/leads/missed-payment" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border pt-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image src="/saintsal-logo.png" alt="SaintSal Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight">
              <span className="text-gold-gradient">Cookin</span>
              <span className="text-foreground">Foreclosures</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Lead Products <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border">
                {leadProducts.map((product) => (
                  <DropdownMenuItem key={product.href} asChild>
                    <Link href={product.href} className="cursor-pointer">
                      {product.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-3 text-muted-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block py-3 px-2 text-foreground font-medium min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-3 px-2 text-muted-foreground min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="block py-3 px-2 text-muted-foreground min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <div className="py-2 px-2">
              <span className="text-muted-foreground text-sm font-medium">Lead Products</span>
              <div className="mt-2 pl-2 space-y-1">
                {leadProducts.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block py-3 text-sm text-muted-foreground min-h-[44px] flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/pricing"
              className="block py-3 px-2 text-muted-foreground min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block py-3 px-2 text-muted-foreground min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-2 text-muted-foreground min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-3 px-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full bg-transparent h-12">
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground h-12">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
