"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { User, Bell, Shield, Mail } from "lucide-react"

export default function SettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" subtitle="Manage your account preferences" />

      <div className="p-6 space-y-6 max-w-4xl">
        {/* Profile */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <Input defaultValue="John Doe" className="bg-muted border-0" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input defaultValue="john@example.com" className="bg-muted border-0" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input defaultValue="(555) 123-4567" className="bg-muted border-0" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input defaultValue="Doe Investments LLC" className="bg-muted border-0" />
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { title: "Email Notifications", desc: "Receive daily lead summaries via email", defaultChecked: true },
              {
                title: "New Lead Alerts",
                desc: "Get notified when new leads match your criteria",
                defaultChecked: true,
              },
              { title: "Weekly Reports", desc: "Receive weekly performance reports", defaultChecked: false },
              { title: "Product Updates", desc: "Stay informed about new features", defaultChecked: true },
            ].map((notification) => (
              <div key={notification.title} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{notification.title}</div>
                  <div className="text-sm text-muted-foreground">{notification.desc}</div>
                </div>
                <Switch defaultChecked={notification.defaultChecked} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Current Password</label>
              <Input type="password" placeholder="Enter current password" className="bg-muted border-0" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">New Password</label>
                <Input type="password" placeholder="Enter new password" className="bg-muted border-0" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Confirm Password</label>
                <Input type="password" placeholder="Confirm new password" className="bg-muted border-0" />
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground">Update Password</Button>
          </CardContent>
        </Card>

        {/* Lead Preferences */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Lead Delivery Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Delivery Email</label>
              <Input defaultValue="john@example.com" className="bg-muted border-0" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="font-medium">Daily CSV Delivery</div>
                <div className="text-sm text-muted-foreground">Receive a CSV file of new leads every morning</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="font-medium">Real-Time Alerts</div>
                <div className="text-sm text-muted-foreground">Get instant notifications for high-priority leads</div>
              </div>
              <Switch defaultChecked />
            </div>
            <Button className="bg-primary text-primary-foreground">Save Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
