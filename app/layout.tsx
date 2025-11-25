import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "ForeclosureGold - Real-Time Distressed Property Leads",
  description:
    "Access verified, up-to-the-minute foreclosure, probate, missed-payment, and bankruptcy leads before anyone else. Nationwide coverage, every state, every county, every day.",
  keywords: [
    "foreclosure leads",
    "distressed properties",
    "real estate investing",
    "probate leads",
    "bankruptcy leads",
    "pre-foreclosure",
  ],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
