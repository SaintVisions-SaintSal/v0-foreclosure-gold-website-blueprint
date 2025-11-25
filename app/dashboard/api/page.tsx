"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Check, Eye, EyeOff, RefreshCw, Code, FileText } from "lucide-react"

const endpoints = [
  { method: "GET", path: "/api/v1/leads", description: "Retrieve all leads with filters" },
  { method: "GET", path: "/api/v1/leads/{id}", description: "Get single lead details" },
  { method: "GET", path: "/api/v1/leads/export", description: "Export leads as CSV" },
  { method: "GET", path: "/api/v1/stats", description: "Get lead statistics" },
]

const codeExample = `// Example: Fetch leads with the ForeclosureGold API
const response = await fetch('https://api.foreclosuregold.com/v1/leads', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  params: {
    state: 'TX',
    type: 'pre-foreclosure',
    limit: 100
  }
});

const leads = await response.json();
console.log(leads);`

export default function ApiPage() {
  const [showKey, setShowKey] = useState(false)
  const [copied, setCopied] = useState(false)
  const apiKey = "fg_live_sk_1234567890abcdef1234567890abcdef"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <DashboardHeader title="API & Documentation" subtitle="Integrate ForeclosureGold data into your systems" />

      <div className="p-6 space-y-6">
        {/* API Key */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Your API Key
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Input
                  type={showKey ? "text" : "password"}
                  value={apiKey}
                  readOnly
                  className="bg-muted border-0 font-mono pr-24"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowKey(!showKey)}>
                    {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Regenerate
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Keep your API key secure. Do not share it publicly or commit it to version control.
            </p>
          </CardContent>
        </Card>

        {/* Endpoints */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>API Endpoints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {endpoints.map((endpoint) => (
                <div key={endpoint.path} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <span
                    className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                      endpoint.method === "GET" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-sm flex-1">{endpoint.path}</code>
                  <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Example */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Quick Start Example</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="p-4 rounded-xl bg-[#0d1117] text-[#c9d1d9] overflow-x-auto text-sm">
                <code>{codeExample}</code>
              </pre>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => navigator.clipboard.writeText(codeExample)}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documentation Links */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Getting Started", desc: "Learn the basics of our API" },
                { title: "Authentication", desc: "How to authenticate requests" },
                { title: "Rate Limits", desc: "Understand usage limits" },
                { title: "Webhooks", desc: "Real-time event notifications" },
                { title: "Error Handling", desc: "Handle errors gracefully" },
                { title: "SDKs & Libraries", desc: "Official client libraries" },
              ].map((doc) => (
                <button
                  key={doc.title}
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-left"
                >
                  <div className="font-medium mb-1">{doc.title}</div>
                  <div className="text-sm text-muted-foreground">{doc.desc}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
