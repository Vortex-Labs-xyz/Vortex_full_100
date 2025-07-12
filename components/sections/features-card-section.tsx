"use client"

import { Zap, KeyRound, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "Ultra-Fast Execution Under 0.4 Seconds",
    shortTitle: "<0.4s Execution Direct to Block",
    description: "Our advanced Rust engine leverages Jito-Bundle technology to push transactions directly to the block leader, delivering execution speeds faster than all standard trading bots in the Solana ecosystem.",
    keywords: ["rust engine", "jito bundle", "solana trading", "fast execution", "block leader"],
    benefits: ["Sub-second execution", "Direct block access", "Outperforms standard bots"]
  },
  {
    icon: KeyRound,
    title: "Instant MPC Wallet Creation Without Seed Phrases",
    shortTitle: "MPC Wallet in Seconds – No Seed",
    description: "Revolutionary non-custodial wallet technology that starts automatically within seconds. Fully secure, anonymous, and MiCA-compliant – instantly usable directly in Telegram without complex setup.",
    keywords: ["mpc wallet", "non-custodial", "telegram wallet", "mica compliant", "secure wallet"],
    benefits: ["No seed phrase required", "Instant setup", "MiCA compliance", "Telegram integration"]
  },
  {
    icon: "rust-rocket",
    title: "24/7 Automated Copy Trading in Telegram",
    shortTitle: "Copy Trading in Telegram 24/7",
    description: "Follow the most profitable wallets in real-time with gas-optimized transactions. Complete automation without interfaces or logins – just pure performance-driven copy trading around the clock.",
    keywords: ["copy trading", "telegram bot", "automated trading", "profitable wallets", "gas optimization"],
    benefits: ["24/7 automation", "No interface needed", "Gas optimization", "Real-time copying"]
  },
  {
    icon: ShieldCheck,
    title: "Maximum Security with European Infrastructure",
    shortTitle: "Maximum Security, Real Structures",
    description: "Hosted on secure European infrastructure and operated by certified professionals from Germany and Liechtenstein. Complete transparency with real team, real structures – no shadow operations or rug risks.",
    keywords: ["european hosting", "german team", "liechtenstein", "secure infrastructure", "transparent team"],
    benefits: ["European hosting", "Certified team", "Full transparency", "No rug risk"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function FeaturesCardSection() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vortex Trading Platform",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, Telegram, Chrome Extension",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": features.map(feature => feature.title),
    "description": "Advanced Solana trading platform with ultra-fast execution, MPC wallet technology, and automated copy trading.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Section background="subtle" size="large" className="relative">
        <div className="mx-auto max-w-6xl">
          {/* Section Header for SEO */}
          <header className="text-center mb-16">
            <Heading as="h2" level="h2" className="mb-4">
              Advanced Trading Features
            </Heading>
            <p className="text-lg text-textSub max-w-3xl mx-auto">
              Experience the next generation of Solana trading with our comprehensive suite of advanced features designed for professional traders and DeFi enthusiasts.
            </p>
          </header>

          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            role="list"
            aria-label="Trading platform features"
          >
            {features.map((feature, index) => (
              <motion.article
                key={index} 
                className="group relative"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                role="listitem"
              >
                <div className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-accent/20 h-full">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon container */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-accentSoft text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg mb-6">
                    {feature.icon === "rust-rocket" ? (
                      <Image
                        src="/RR_favicon-32x32.png"
                        alt="Rust Rocket Logo - Advanced Trading Technology"
                        width={32}
                        height={32}
                        className="rounded-sm transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    ) : (
                      <feature.icon className="h-8 w-8" aria-hidden="true" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <header className="mb-4">
                    <h3 className="text-lg font-semibold text-text transition-colors duration-300 group-hover:text-accent mb-2">
                      {feature.shortTitle}
                    </h3>
                    <p className="text-sm text-textSub leading-relaxed">
                      {feature.description}
                    </p>
                  </header>

                  {/* Benefits List */}
                  <ul className="space-y-1 text-xs text-textSub/80" role="list">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-accent rounded-full mr-2 flex-shrink-0" aria-hidden="true"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hidden keywords for SEO */}
                  <div className="sr-only">
                    Keywords: {feature.keywords.join(", ")}
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Additional SEO Content */}
          <footer className="mt-16 text-center">
            <p className="text-sm text-textSub max-w-4xl mx-auto">
              Our trading platform combines cutting-edge technology with user-friendly design to deliver the ultimate DeFi trading experience. 
              From lightning-fast execution to secure wallet management, every feature is built for serious traders who demand performance and security.
            </p>
          </footer>
        </div>
      </Section>
    </>
  )
} 