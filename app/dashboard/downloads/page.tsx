import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileSpreadsheet, Clock, Check } from "lucide-react"

const exports = [
  { name: "All Leads - November 2025", date: "Nov 25, 2025", records: "12,847", size: "4.2 MB", status: "Ready" },
  { name: "Pre-Foreclosure - Texas", date: "Nov 24, 2025", records: "1,234", size: "512 KB", status: "Ready" },
  { name: "Probate Leads - California", date: "Nov 23, 2025", records: "867", size: "356 KB", status: "Ready" },
  { name: "All Leads - October 2025", date: "Oct 31, 2025", records: "11,502", size: "3.8 MB", status: "Ready" },
  { name: "Bankruptcy - All States", date: "Oct 28, 2025", records: "2,156", size: "892 KB", status: "Ready" },
]

export default function DownloadsPage() {
  return (
    <>
      <DashboardHeader title="Downloads" subtitle="Export and download your lead data" />

      <div className="p-6 space-y-6">
        {/* Quick Export */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Quick Export</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "All Leads Today", count: "847 leads" },
                { label: "This Week", count: "2,341 leads" },
                { label: "This Month", count: "12,847 leads" },
                { label: "Custom Range", count: "Select dates" },
              ].map((option) => (
                <button
                  key={option.label}
                  className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/30 transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <FileSpreadsheet className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.count}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Exports */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Recent Exports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Export Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Records</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Size</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exports.map((exp, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <FileSpreadsheet className="w-5 h-5 text-primary" />
                          <span className="font-medium">{exp.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{exp.date}</td>
                      <td className="py-4 px-4">{exp.records}</td>
                      <td className="py-4 px-4 text-muted-foreground">{exp.size}</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                          <Check className="w-3 h-3" />
                          {exp.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Exports */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Scheduled Exports</CardTitle>
            <Button variant="outline" size="sm">
              + Add Schedule
            </Button>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-xl bg-secondary/50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Daily Export - All New Leads</div>
                  <div className="text-sm text-muted-foreground">Every day at 6:00 AM EST → john@example.com</div>
                </div>
              </div>
              <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">Active</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
