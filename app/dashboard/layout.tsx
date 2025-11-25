import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { SaintSalAssistant } from "@/components/saint-sal-assistant"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main className="lg:ml-64">{children}</main>
      <SaintSalAssistant />
    </div>
  )
}
