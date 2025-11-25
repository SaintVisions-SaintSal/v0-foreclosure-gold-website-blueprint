import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ForeclosureGold",
  },
  formatDetection: {
    telephone: true,
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* PWA iOS icons */}
        <link rel="apple-touch-icon" href="/icons/icon-192.jpg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
