import { Metadata } from "next"
import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import FeaturesCardSection from "@/components/sections/features-card-section"
import AlternatingFeatures from "@/components/sections/alternating-features"
import MissionStatement from "@/components/sections/MissionStatement"
import LatestPosts from "@/components/sections/LatestPosts"
import Footer from "@/components/layout/footer"
import { generateSEO, organizationSchema, softwareApplicationSchema } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({
    title: "Professional Solana Trading Bot | Ultra-Fast Non-Custodial Trading",
    description: "Trade Solana with institutional-grade speed (<0.4s execution). Non-custodial Telegram bot, Web DEX & Chrome extension. MiCA-compliant, European infrastructure. Start trading now!",
    keywords: [
      "solana trading bot",
      "telegram trading bot",
      "non-custodial solana bot",
      "rust rocket telegram",
      "solana copy trading",
      "meme coin sniper bot",
      "jito bundle trading",
      "mica compliant trading",
      "solana dex trading",
      "professional solana trading",
      "institutional solana bot",
      "solana automated trading"
    ],
    url: "https://vortexgroup.xyz",
    type: "website"
  })
}

export default function LandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      softwareApplicationSchema,
      {
        "@type": "WebSite",
        "@id": "https://vortexgroup.xyz/#website",
        "url": "https://vortexgroup.xyz",
        "name": "Vortex Group - Professional Solana Trading",
        "description": "Professional-grade Solana trading with institutional-speed execution. Non-custodial Telegram bot, Web DEX & Chrome extension. MiCA-compliant European infrastructure.",
        "publisher": {
          "@id": "https://vortexgroup.xyz/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://vortexgroup.xyz/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://vortexgroup.xyz/products/bot#product",
        "name": "Rust Rocket Telegram Bot",
        "description": "Ultra-fast Solana trading bot with sub-second execution, non-custodial security, and MiCA compliance",
        "brand": {
          "@type": "Brand",
          "name": "Vortex Group"
        },
        "manufacturer": {
          "@id": "https://vortexgroup.xyz/#organization"
        },
        "category": "Financial Software",
        "offers": {
          "@type": "Offer",
          "url": "https://vortexgroup.xyz/products/bot",
          "priceCurrency": "SOL",
          "price": "0.75",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQ",
        "@id": "https://vortexgroup.xyz/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How fast is the Rust Rocket trading bot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rust Rocket delivers sub-0.4 second execution times using advanced Rust programming and Jito Bundle technology for direct block leader access."
            }
          },
          {
            "@type": "Question", 
            "name": "Is the Solana trading bot non-custodial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Rust Rocket uses non-custodial MPC wallet technology. You maintain full control of your private keys and funds at all times."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      <main className="space-y-sectionY">
        <HeroSection />
        <FeaturesCardSection />
        <AlternatingFeatures />
        <MissionStatement />
        <LatestPosts />
      </main>
      <Footer />
    </>
  )
}
