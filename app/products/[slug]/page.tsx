import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FaqSection from "@/components/sections/FaqSection"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { productMeta } from "@/lib/seo"
import { products } from "@/lib/products-config"
import { faqData } from "@/lib/faq-config"
import { CheckCircle, Play, ArrowRight, Clock, Shield, Zap, TrendingUp, Users, Award, Rocket } from "lucide-react"

type ProductSlug = keyof typeof productMeta

export async function generateStaticParams() {
  // Generate static params for all products that should have dedicated pages
  const pageProducts = products.filter((p) => p.id === "bot" || p.href.startsWith("/products/"))
  return pageProducts.map((p) => ({
    slug: p.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: ProductSlug }> }): Promise<Metadata> {
  const { slug } = await params
  if (!productMeta[slug]) {
    return notFound()
  }

  const meta = productMeta[slug]
  const product = products.find((p) => p.id === slug)
  
  return {
    title: meta.title,
    description: meta.desc,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.desc,
      type: "website",
      url: `/products/${slug}`,
      images: [
        {
          url: product?.image || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: product?.alt || `${product?.title} interface`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.desc,
      images: [product?.image || "/placeholder.svg"],
    },
  }
}

// Product-specific feature configurations
const productFeatures = {
  bot: [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Sub-400ms Execution",
      description: "Lightning-fast trade execution with sub-second latency for optimal entry and exit timing."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "MPC Wallet Security",
      description: "Multi-party computation ensures your private keys never leave your device."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Telegram Copy Trading",
      description: "Follow successful traders and automatically copy their strategies in real-time."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Security Standards",
      description: "Bank-grade encryption and security protocols protect your assets at all times."
    }
  ],
  dex: [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Real-time market data, price charts, and comprehensive trading analytics."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Liquidity Pools",
      description: "Access to deep liquidity across multiple DEXs for optimal price execution."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "High-Speed Execution",
      description: "Optimized smart contracts for fastest possible trade settlement."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Integration",
      description: "Non-custodial wallet integration with hardware wallet support."
    }
  ],
  extension: [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-Time Alerts",
      description: "Instant notifications for token launches, price movements, and opportunities."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Token Sniping",
      description: "Automatically detect and trade new token launches before they hit the market."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Wallet Management",
      description: "Secure wallet integration with transaction simulation and protection."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "One-Click Trading",
      description: "Trade directly from any webpage without leaving your current tab."
    }
  ],
  leaderboard: [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real-Time PnL Tracking",
      description: "Live profit and loss tracking across all your trading activities."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Wallet Leaderboard",
      description: "Compete with top traders and see how you rank against the community."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Performance Rewards",
      description: "Earn exclusive benefits and rewards for consistent top performance."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy Protection",
      description: "Your trading details remain private while showcasing your success."
    }
  ],
  launchpad: [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24-Hour Launches",
      description: "Complete token launch process from submission to live trading in just 24 hours."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "MiCA Compliance",
      description: "Full regulatory compliance with EU MiCA standards and documentation."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Automated Workflow",
      description: "Streamlined white-paper generation and compliance documentation process."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Audits",
      description: "Comprehensive smart contract audits and security reviews included."
    }
  ]
}

export default async function ProductPage({ params }: { params: Promise<{ slug: ProductSlug }> }) {
  const { slug } = await params
  const product = products.find((p) => p.id === slug)
  const faqs = faqData[slug] || []
  const features = productFeatures[slug] || []

  if (!product) {
    return notFound()
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.title,
    "description": product.subtitle,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": slug === "extension" ? "Chrome" : "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Vortex",
      "url": "https://vortex.com"
    }
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: product.title }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Header />
      <main className="bg-bg pt-24 sm:pt-32">
        {/* Breadcrumb Navigation */}
        <section className="py-6">
          <div className="container mx-auto max-w-6xl px-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    {product.icons?.map((icon, index) => (
                      <Image
                        key={index}
                        src={icon}
                        alt=""
                        width={24}
                        height={24}
                        className="rounded-sm"
                      />
                    ))}
                  </div>
                  {product.isNew && (
                    <Badge variant="secondary" className="bg-accentSoft text-accent">
                      New
                    </Badge>
                  )}
                  {product.badge && (
                    <Badge variant="outline" className="text-textSub">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight mb-6">
                  {product.title}
                </h1>
                <p className="text-lg text-textSub mb-8 leading-relaxed">
                  {product.subtitle}
                </p>
                
                {/* Demo placeholder for bot */}
                {slug === "bot" && (
                  <div className="mb-8">
                    <Card className="p-6 bg-card border-border">
                      <div className="flex items-center justify-center h-48 bg-cardSoft rounded-lg">
                        <div className="text-center">
                          <Play className="h-12 w-12 text-accent mx-auto mb-4" />
                          <p className="text-textSub">Video Demo Coming Soon</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}

                <a
                  href={product.href}
                  target={product.href.startsWith("http") ? "_blank" : undefined}
                  rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-[32px] bg-text px-8 py-4 font-medium text-white transition-all duration-200 hover:bg-text/90 hover:shadow-lg"
                >
                  {product.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative">
                <div className="aspect-square relative rounded-3xl bg-card border border-border p-8 shadow-soft">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt || `${product.title} interface`}
                  fill
                    className="object-contain rounded-2xl"
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-cardSoft">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
                Key Features
              </h2>
              <p className="text-lg text-textSub max-w-2xl mx-auto">
                Discover what makes {product.title} the perfect solution for your trading needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:shadow-soft transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-2xl bg-accentSoft text-accent">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-textSub leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection items={faqs} />

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-cardSoft">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-textSub mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust {product.title} for their Solana trading needs.
            </p>
            <a
              href={product.href}
              target={product.href.startsWith("http") ? "_blank" : undefined}
              rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-[32px] bg-text px-8 py-4 font-medium text-white transition-all duration-200 hover:bg-text/90 hover:shadow-lg"
            >
              {product.ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
