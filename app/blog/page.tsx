import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SaintSalAssistant } from "@/components/saint-sal-assistant"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, TrendingUp, MapPin, BarChart3, BookOpen } from "lucide-react"

const featuredPost = {
  slug: "q4-2025-foreclosure-market-outlook",
  title: "Q4 2025 Foreclosure Market Outlook: Where Smart Money Is Moving",
  excerpt:
    "Our latest analysis reveals emerging hotspots in the Southeast and Midwest, with pre-foreclosure activity surging 23% in key metro areas. Here's what you need to know.",
  category: "Market Insights",
  date: "Nov 22, 2025",
  readTime: "8 min read",
  image: "/real-estate-market-analysis-chart-dark-theme-gold-.jpg",
}

const blogPosts = [
  {
    slug: "missed-payment-leads-advantage",
    title: "The 3-Week Advantage: Why Missed Payment Leads Are Gold",
    excerpt: "Learn how our proprietary data gives you a critical head start before properties hit public records.",
    category: "Strategy",
    date: "Nov 20, 2025",
    readTime: "5 min read",
    icon: TrendingUp,
  },
  {
    slug: "top-counties-november-2025",
    title: "Top 10 Counties for Distressed Properties: November 2025",
    excerpt: "County-by-county breakdown of foreclosure activity, equity positions, and investment potential.",
    category: "Market Recap",
    date: "Nov 18, 2025",
    readTime: "6 min read",
    icon: MapPin,
  },
  {
    slug: "probate-leads-complete-guide",
    title: "The Complete Guide to Probate Lead Investing",
    excerpt: "Everything you need to know about acquiring probate properties with sensitivity and success.",
    category: "Education",
    date: "Nov 15, 2025",
    readTime: "12 min read",
    icon: BookOpen,
  },
  {
    slug: "bankruptcy-chapter-comparison",
    title: "Chapter 7 vs 11 vs 13: Which Bankruptcy Leads Convert Best?",
    excerpt: "Data-driven analysis of conversion rates across different bankruptcy types and strategies for each.",
    category: "Strategy",
    date: "Nov 12, 2025",
    readTime: "7 min read",
    icon: BarChart3,
  },
  {
    slug: "wholesale-deal-calculator",
    title: "How to Price Wholesale Deals: Our Formula Revealed",
    excerpt: "The exact ARV and offer calculation we use to help investors close profitable wholesale deals.",
    category: "Education",
    date: "Nov 10, 2025",
    readTime: "9 min read",
    icon: TrendingUp,
  },
  {
    slug: "florida-market-deep-dive",
    title: "Florida Deep Dive: Insurance Crisis Creates Opportunity",
    excerpt: "How rising insurance costs are driving motivated sellers and what counties to watch.",
    category: "Market Insights",
    date: "Nov 8, 2025",
    readTime: "10 min read",
    icon: MapPin,
  },
]

const categories = [
  { name: "All Posts", count: 47 },
  { name: "Market Insights", count: 18 },
  { name: "Market Recap", count: 12 },
  { name: "Strategy", count: 9 },
  { name: "Education", count: 8 },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Subscriber Exclusive Content
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              Market <span className="text-gold-gradient">Insights</span> & Recaps
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Weekly analysis, county-level data, and investment strategies from our research team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{cat.count}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Get Full Access</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unlock all market insights and weekly recaps with an Unlimited subscription.
                  </p>
                  <Link href="/signup?plan=unlimited">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10">
                      Subscribe Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="grid sm:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <post.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">{post.category}</span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                  Load More Articles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 to-primary/5 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Never Miss a <span className="text-gold-gradient">Market Update</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to get weekly market recaps, county insights, and strategy tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
      <SaintSalAssistant />
    </main>
  )
}
