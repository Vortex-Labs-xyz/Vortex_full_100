import { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "@/lib/products-config"
import { generateSEO, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Zap, Shield, Clock, Users, CheckCircle, ArrowRight, Bot, Rocket, TrendingUp } from "lucide-react"
import Image from "next/image"

interface ProductPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  
  if (!product) {
    return generateSEO({
      title: "Product Not Found",
      description: "The requested product could not be found.",
      noindex: true
    })
  }

  // Spezielle SEO für Rust Rocket Bot
  if (product.slug === 'bot') {
    return generateSEO({
      title: "Rust Rocket - Telegram Sniper Bot for Solana Meme Coins",
      description: "Ultra-fast Solana trading bot with <0.4s execution. Snipe meme coins, copy profitable wallets, non-custodial MPC wallet. Start trading in Telegram now!",
      keywords: [
        "telegram sniper bot",
        "solana meme coin bot",
        "rust rocket bot",
        "copy trading bot",
        "solana trading bot",
        "meme coin sniper",
        "jito bundle bot",
        "non-custodial trading",
        "telegram defi bot",
        "solana dex bot"
      ],
      url: `https://vortexgroup.xyz/products/${product.slug}`,
      type: "product"
    })
  }

  return generateSEO({
    title: product.name,
    description: product.description,
    keywords: product.keywords || [],
    url: `https://vortexgroup.xyz/products/${product.slug}`,
    type: "product"
  })
}

// FAQ Data für Rust Rocket Bot
const botFAQs = [
  {
    question: "What is a Telegram Sniper Bot?",
    answer: "A Telegram sniper bot is an automated trading tool that executes trades on decentralized exchanges within milliseconds of token launches. Our Rust Rocket bot uses advanced Jito Bundle technology to achieve sub-second execution times, giving you the competitive edge in meme coin trading."
  },
  {
    question: "How fast is the Rust Rocket execution?",
    answer: "Rust Rocket delivers execution speeds under 0.4 seconds by leveraging our custom Rust engine and Jito Bundle technology. This pushes transactions directly to the block leader, bypassing mempool delays and outperforming standard trading bots."
  },
  {
    question: "Is my wallet secure with Rust Rocket?",
    answer: "Yes, Rust Rocket uses non-custodial MPC (Multi-Party Computation) wallet technology. You maintain full control of your funds with no seed phrases required. The wallet is automatically created and secured using advanced cryptographic techniques."
  },
  {
    question: "How do I start copy trading on Solana?",
    answer: "Simply join our Telegram bot, connect your wallet, and select from our curated list of profitable traders. The bot will automatically copy their trades with gas optimization and risk management. No interface needed - everything runs 24/7 in the background."
  },
  {
    question: "What makes Rust Rocket different from other bots?",
    answer: "Rust Rocket combines ultra-fast execution (<0.4s), non-custodial security, European infrastructure, and 24/7 automation. Built by certified professionals from Germany and Liechtenstein, it offers transparency and compliance that other bots lack."
  },
  {
    question: "Can I use Rust Rocket for meme coin trading?",
    answer: "Absolutely! Rust Rocket is specifically optimized for Solana meme coin trading. It can snipe new launches, monitor bonding curves, and execute trades with lightning speed. Perfect for catching pump opportunities and avoiding rugs."
  }
]

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  // Spezielle Behandlung für Rust Rocket Bot
  if (product.slug === 'bot') {
    const breadcrumbs = [
      { name: "Home", url: "https://vortexgroup.xyz" },
      { name: "Products", url: "https://vortexgroup.xyz/products" },
      { name: "Rust Rocket Bot", url: "https://vortexgroup.xyz/products/bot" }
    ]

    const productSchema = generateProductSchema({
      name: "Rust Rocket Trading Bot",
      description: "Ultra-fast Telegram trading bot for Solana meme coins with sub-second execution and non-custodial security",
      features: [
        "Sub-0.4s execution with Jito Bundle technology",
        "Non-custodial MPC wallet creation",
        "24/7 automated copy trading",
        "Solana meme coin optimization",
        "European infrastructure and compliance",
        "Real-time DEX integration",
        "Gas optimization algorithms",
        "Risk management tools"
      ],
      rating: 4.9,
      ratingCount: 2847
    })

    const faqSchema = generateFAQSchema(botFAQs)
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [productSchema, faqSchema, breadcrumbSchema]
    }

    return (
      <>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Header />
        <main>
          {/* Hero Section */}
          <Section size="large" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] -z-10" />
            
            <div className="container mx-auto max-w-6xl px-container">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <Badge variant="outline" className="w-fit bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors">
                      <Bot className="w-4 h-4 mr-2" />
                      Telegram Trading Bot
                    </Badge>
                    <div className="space-y-4">
                      <Heading as="h1" level="h1" className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                        Rust Rocket
                      </Heading>
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Sniper Bot
                      </div>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                      Ultra-fast Solana meme coin trading with <strong className="text-primary">&lt;0.4s execution</strong>. 
                      Non-custodial, secure, and fully automated in Telegram.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                      <a href="https://t.me/RustRocketbot" target="_blank" rel="noopener noreferrer">
                        Start Trading Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 transition-colors">
                      View Demo
                    </Button>
                  </div>


                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="relative">
                    <Image
                      src="/GPT_Image_1_fge_dieses_logo_oben_hinzu_im_bild_0.png"
                      alt="Rust Rocket Bot interface with logo"
                      width={600}
                      height={800}
                      className="rounded-xl shadow-2xl border border-white/20 backdrop-blur-sm"
                      priority
                    />
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                      🚀 Live Trading
                    </div>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Mobile Experience Section */}
          <Section className="py-24 bg-gradient-to-b from-background to-muted/10">
            <div className="container mx-auto max-w-6xl px-container">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative group max-w-md mx-auto lg:mx-0">
                    <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="relative">
                                             <Image
                         src="/Logo_Main_RR.jpg"
                         alt="Rust Rocket Bot main logo"
                         width={400}
                         height={600}
                         className="rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm mx-auto"
                       />
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-8">
                  <div className="space-y-4">
                    <Badge variant="outline" className="w-fit bg-primary/10 border-primary/20 text-primary">
                      <Bot className="w-4 h-4 mr-2" />
                      Mobile First
                    </Badge>
                    <Heading as="h2" level="h2" className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                      Trade Anywhere, Anytime
                    </Heading>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Rust Rocket Bot runs entirely in Telegram - no app downloads, no complex interfaces. 
                      Just open Telegram and start trading with the fastest bot on Solana.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">No App Required</h3>
                        <p className="text-muted-foreground text-sm">Works directly in Telegram - available on all devices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Instant Setup</h3>
                        <p className="text-muted-foreground text-sm">Start trading in under 30 seconds with automated wallet creation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Secure by Design</h3>
                        <p className="text-muted-foreground text-sm">Non-custodial MPC wallet with military-grade security</p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <a href="https://t.me/RustRocketbot" target="_blank" rel="noopener noreferrer">
                      Try on Mobile Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Section>

          {/* Key Features */}
          <Section className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto max-w-6xl px-container">
              <div className="text-center mb-20">
                <Badge variant="outline" className="mb-6 bg-primary/10 border-primary/20 text-primary">
                  <Zap className="w-4 h-4 mr-2" />
                  Advanced Features
                </Badge>
                <Heading as="h2" level="h2" className="mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Why Rust Rocket Dominates Solana Trading
                </Heading>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Built with cutting-edge technology and European compliance standards, 
                  Rust Rocket delivers unmatched speed and security for serious traders.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Lightning-Fast Execution",
                    description: "Sub-0.4s execution using Rust engine and Jito Bundle technology. Direct block leader access bypasses mempool delays.",
                    highlight: "Faster than 99% of bots",
                    gradient: "from-yellow-500 to-orange-500"
                  },
                  {
                    icon: Shield,
                    title: "Non-Custodial Security",
                    description: "MPC wallet technology with no seed phrases. You control your funds with military-grade cryptographic security.",
                    highlight: "Your keys, your coins",
                    gradient: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: Users,
                    title: "Copy Trading Made Easy",
                    description: "Follow profitable wallets automatically. Gas-optimized execution with risk management and 24/7 monitoring.",
                    highlight: "Top 1% trader access",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Rocket,
                    title: "Meme Coin Specialist",
                    description: "Optimized for Solana meme coin launches. Bonding curve analysis, rug detection, and pump timing algorithms.",
                    highlight: "Meme coin optimized",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: Clock,
                    title: "24/7 Automation",
                    description: "Fully automated trading with no interface needed. Set parameters once and let the bot handle everything.",
                    highlight: "Set and forget",
                    gradient: "from-indigo-500 to-purple-500"
                  },
                  {
                    icon: TrendingUp,
                    title: "European Infrastructure",
                    description: "Hosted in Germany with full regulatory compliance. Transparent team and real business structures.",
                    highlight: "MiCA compliant",
                    gradient: "from-red-500 to-rose-500"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="relative group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-0 bg-gradient-to-b from-background to-muted/30 backdrop-blur-sm">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-full w-full rounded-lg bg-background" />
                    </div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {feature.highlight}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          {/* FAQ Section */}
          <Section className="py-24 bg-gradient-to-b from-muted/20 to-background">
            <div className="container mx-auto max-w-4xl px-container">
              <div className="text-center mb-20">
                <Badge variant="outline" className="mb-6 bg-primary/10 border-primary/20 text-primary">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  FAQ
                </Badge>
                <Heading as="h2" level="h2" className="mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </Heading>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Everything you need to know about Rust Rocket trading bot
                </p>
              </div>

              <div className="space-y-6">
                {botFAQs.map((faq, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-background to-muted/30 backdrop-blur-sm">
                    <div className="p-8">
                      <h3 className="text-lg font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                    {/* Hover accent line */}
                    <div className="h-1 bg-gradient-to-r from-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          {/* CTA Section */}
          <Section className="py-24 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
            
            <div className="container mx-auto max-w-4xl px-container text-center relative z-10">
              <div className="space-y-12">
                <div className="space-y-6">
                  <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary">
                    <Rocket className="w-4 h-4 mr-2" />
                    Get Started
                  </Badge>
                  <Heading as="h2" level="h2" className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                    Ready to Start Trading?
                  </Heading>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Join thousands of traders already using Rust Rocket for profitable Solana trading
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <a href="https://t.me/RustRocketbot" target="_blank" rel="noopener noreferrer">
                      <Bot className="w-5 h-5 mr-2" />
                      Start Bot Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 transition-colors" asChild>
                    <a href="https://t.me/RustRocketbot" target="_blank" rel="noopener noreferrer">
                      Join Community
                    </a>
                  </Button>
                </div>


              </div>
            </div>
          </Section>
        </main>
        <Footer />
      </>
    )
  }

  // Fallback für andere Produkte
  return (
    <>
      <Header />
      <main>
        <Section size="large">
          <div className="container mx-auto max-w-4xl px-container">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {product.category}
                </Badge>
                <Heading as="h1" level="h1">
                  {product.name}
                </Heading>
                <p className="text-xl text-textSub">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
