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
  title: "CookinForeclosures | Responsible Intelligence - Cookin' Knowledge 24/7",
  description:
    "Access verified, up-to-the-minute foreclosure, probate, missed-payment, and bankruptcy leads before anyone else. Nationwide coverage, every state, every county, every day. A Saint Vision Technologies LLC Company.",
  keywords: [
    "foreclosure leads",
    "distressed properties",
    "real estate investing",
    "probate leads",
    "bankruptcy leads",
    "pre-foreclosure",
    "SaintSal",
    "Saint Vision Technologies",
  ],
  icons: {
    icon: [
      { url: "/saintsal-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/saintsal-icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/saintsal-icon.png",
    apple: [{ url: "/saintsal-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CookinForeclosures",
  },
  openGraph: {
    title: "CookinForeclosures | Responsible Intelligence - Cookin' Knowledge 24/7",
    description:
      "Access verified, up-to-the-minute foreclosure, probate, missed-payment, and bankruptcy leads before anyone else.",
    siteName: "CookinForeclosures",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CookinForeclosures | Responsible Intelligence",
    description: "Cookin' Knowledge 24/7 - Real-time distressed property leads nationwide.",
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
        <link rel="apple-touch-icon" href="/saintsal-icon.png" />
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
