import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, FileText, MapPin, Clock, ArrowRight, Download, Bell, Zap } from "lucide-react"

const stats = [
  { label: "Total Leads Available", value: "12,847", change: "+2,341 this week", icon: FileText, trend: "up" },
  { label: "States Covered", value: "50", change: "All states active", icon: MapPin, trend: "neutral" },
  { label: "New Today", value: "847", change: "+12% vs yesterday", icon: Bell, trend: "up" },
  { label: "Avg. Lead Age", value: "< 15min", change: "Real-time updates", icon: Clock, trend: "neutral" },
]

const recentLeads = [
  {
    id: 1,
    address: "1234 Oak Street",
    city: "Phoenix",
    state: "AZ",
    type: "Pre-Foreclosure",
    equity: "$85,000",
    status: "New",
    time: "2 min ago",
  },
  {
    id: 2,
    address: "5678 Maple Ave",
    city: "Dallas",
    state: "TX",
    type: "Probate",
    equity: "$120,000",
    status: "New",
    time: "5 min ago",
  },
  {
    id: 3,
    address: "9012 Pine Road",
    city: "Atlanta",
    state: "GA",
    type: "Missed Payment",
    equity: "$65,000",
    status: "New",
    time: "8 min ago",
  },
  {
    id: 4,
    address: "3456 Cedar Lane",
    city: "Denver",
    state: "CO",
    type: "Bankruptcy",
    equity: "$95,000",
    status: "Viewed",
    time: "15 min ago",
  },
  {
    id: 5,
    address: "7890 Birch Blvd",
    city: "Miami",
    state: "FL",
    type: "Wholesale",
    equity: "$150,000",
    status: "Contacted",
    time: "22 min ago",
  },
]

const quickActions = [
  { name: "Download CSV", icon: Download, href: "/dashboard/downloads" },
  { name: "View All Leads", icon: FileText, href: "/dashboard/leads" },
  { name: "API Access", icon: Zap, href: "/dashboard/api" },
]

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader title="Dashboard" subtitle={`Welcome back! You have ${stats[2].value} new leads today.`} />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  {stat.trend === "up" && (
                    <div className="flex items-center gap-1 text-green-500 text-sm">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-primary mt-2">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => (
            <Link key={action.name} href={action.href}>
              <Button variant="outline" className="h-12 bg-transparent">
                <action.icon className="w-4 h-4 mr-2" />
                {action.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Recent Leads */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <Link href="/dashboard/leads">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Property</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Est. Equity</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium">{lead.address}</div>
                        <div className="text-sm text-muted-foreground">
                          {lead.city}, {lead.state}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 rounded-full bg-secondary text-xs font-medium">{lead.type}</span>
                      </td>
                      <td className="py-4 px-4 text-primary font-medium">{lead.equity}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            lead.status === "New"
                              ? "bg-primary/10 text-primary"
                              : lead.status === "Viewed"
                                ? "bg-secondary text-secondary-foreground"
                                : "bg-green-500/10 text-green-500"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{lead.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
