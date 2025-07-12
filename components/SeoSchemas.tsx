export default function SeoSchemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vortexgroup.xyz/#organization",
    name: "VortexGroup",
    legalName: "Vortex Group Ltd.",
    url: "https://vortexgroup.xyz",
    logo: {
      "@type": "ImageObject",
      url: "https://vortexgroup.xyz/vortex-logo.jpg",
      width: 400,
      height: 400
    },
    image: "https://vortexgroup.xyz/vortex-logo.jpg",
    description: "Non-custodial Solana trading bot and DEX platform with MiCA compliance",
    foundingDate: "2024",
    industry: "Financial Technology",
    numberOfEmployees: "10-50",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "info@vortexgroup.xyz",
        contactType: "customer support",
        availableLanguage: ["en", "de"]
      },
      {
        "@type": "ContactPoint",
        url: "https://t.me/vortexgroup_xyz",
        contactType: "customer support",
        availableLanguage: ["en", "de"]
      }
    ],
    address: [
      { "@type": "PostalAddress", addressLocality: "Vaduz", addressCountry: "LI" },
      { "@type": "PostalAddress", addressLocality: "Munich", addressCountry: "DE" },
      { "@type": "PostalAddress", addressLocality: "Singapore", addressCountry: "SG" },
    ],
    sameAs: [
      "https://twitter.com/vortexgroup_xyz",
      "https://t.me/vortexgroup_xyz",
      "https://discord.gg/vortexgroup",
      "https://github.com/vortexgroup-xyz"
    ],
    subOrganization: {
      "@type": "Organization",
      name: "Rust Rocket Bot",
      description: "Telegram-based Solana trading bot",
      url: "https://vortexgroup.xyz/products/bot"
    },
    knowsAbout: [
      "Solana Trading",
      "Telegram Bots", 
      "DeFi",
      "MEV Protection",
      "Non-Custodial Wallets",
      "MPC Technology",
      "Jito Bundles",
      "Copy Trading"
    ]
  }

  const softwareAppSchemaBot = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://vortexgroup.xyz/products/bot#software",
    name: "Rust Rocket Bot",
    alternativeName: "Rust Rocket Telegram Bot",
    description: "Ultra-fast Solana trading bot with <0.4s execution time, copy trading, and MEV protection",
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Trading Bot",
    operatingSystem: "Telegram",
    softwareVersion: "2.1.0",
    datePublished: "2024-01-01",
    dateModified: "2024-12-01",
    url: "https://vortexgroup.xyz/products/bot",
    downloadUrl: "https://t.me/rustrocketbot",
    screenshot: "https://vortexgroup.xyz/features/rust-rocket.png",
    offers: { 
      "@type": "Offer", 
      price: "0.75", 
      priceCurrency: "SOL",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        "@id": "https://vortexgroup.xyz/#organization"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "88",
      bestRating: "5",
      worstRating: "1"
    },
    provider: {
      "@type": "Organization",
      "@id": "https://vortexgroup.xyz/#organization"
    },
    featureList: [
      "Sub-400ms execution speed",
      "Copy trading functionality", 
      "MEV protection",
      "Non-custodial MPC wallet",
      "Jito bundle integration",
      "Multi-DEX support",
      "Real-time market data"
    ],
    requirements: "Telegram account",
    softwareHelp: {
      "@type": "CreativeWork",
      url: "https://vortexgroup.xyz/faq"
    }
  }

  const softwareAppSchemaDex = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VortexGroup Web DEX",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "102",
    },
    provider: {
      "@type": "Organization",
      name: "VortexGroup",
      url: "https://vortexgroup.xyz"
    },
  }

  const softwareAppSchemaExtension = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VortexGroup Chrome Extension",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Chrome",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "45",
    },
    provider: {
      "@type": "Organization",
      name: "VortexGroup",
      url: "https://vortexgroup.xyz"
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://vortexgroup.xyz/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Rust Rocket Bot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rust Rocket Bot is a Telegram-based Solana trading bot that executes trades in under 0.4 seconds with non-custodial MPC wallet technology and MEV protection."
        }
      },
      {
        "@type": "Question", 
        name: "How fast is the execution speed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our bot executes trades in under 400 milliseconds (0.4 seconds) using optimized Rust code and direct Solana RPC connections."
        }
      },
      {
        "@type": "Question",
        name: "Is it safe to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Rust Rocket Bot uses non-custodial MPC wallet technology, meaning you maintain full control of your private keys. We never have access to your funds."
        }
      },
      {
        "@type": "Question",
        name: "What is copy trading?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Copy trading allows you to automatically replicate the trades of successful traders. Our bot monitors top performers and executes their strategies in real-time."
        }
      },
      {
        "@type": "Question",
        name: "What is MEV protection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MEV (Maximal Extractable Value) protection shields your trades from front-running and sandwich attacks using Jito bundles and private mempools."
        }
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://vortexgroup.xyz/#howto",
    name: "How to Start Trading with Rust Rocket Bot",
    description: "Step-by-step guide to get started with Solana trading using our Telegram bot",
    totalTime: "PT5M",
    supply: ["Telegram account", "Solana wallet", "SOL tokens"],
    tool: "Rust Rocket Bot",
    step: [
      {
        "@type": "HowToStep",
        name: "Connect to Telegram Bot",
        text: "Open Telegram and search for @rustrocketbot",
        url: "https://t.me/rustrocketbot"
      },
      {
        "@type": "HowToStep", 
        name: "Create Non-Custodial Wallet",
        text: "Follow the bot instructions to generate your secure MPC wallet"
      },
      {
        "@type": "HowToStep",
        name: "Fund Your Wallet",
        text: "Transfer SOL tokens to your newly created wallet address"
      },
      {
        "@type": "HowToStep",
        name: "Configure Trading Settings",
        text: "Set your slippage tolerance, trade size, and copy trading preferences"
      },
      {
        "@type": "HowToStep",
        name: "Start Trading",
        text: "Use commands like /buy, /sell, or enable copy trading to begin"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchemaBot) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchemaDex) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchemaExtension) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  )
}
