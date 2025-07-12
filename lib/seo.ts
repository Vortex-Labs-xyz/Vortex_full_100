import { Metadata } from 'next'

export const siteConfig = {
  name: 'Vortex Group',
  description: 'Ultra-fast Solana trading with Telegram bot, Web DEX & Chrome extension. Non-custodial, MiCA-ready.',
  url: 'https://vortexgroup.xyz',
  ogImage: 'https://vortexgroup.xyz/og-image.jpg',
  creator: '@vortexgroup',
  keywords: [
    'solana trading',
    'telegram bot',
    'rust rocket',
    'copy trading',
    'meme coins',
    'sniper bot',
    'defi trading',
    'non-custodial wallet',
    'mpc wallet',
    'jito bundle',
    'solana dex',
    'crypto trading bot'
  ]
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  canonical?: string
}

export function generateSEO({
  title,
  description = siteConfig.description,
  image,
  url = siteConfig.url,
  type = 'website',
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  canonical
}: SEOProps = {}): Metadata {
  const seoTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Ultra-Fast Solana Trading`

  const seoDescription = description.length > 155 
    ? description.substring(0, 152) + '...'
    : description

  const seoKeywords = [...siteConfig.keywords, ...keywords].join(', ')

  // Generate dynamic OG image if not provided
  const ogImage = image || `${siteConfig.url}/api/og?title=${encodeURIComponent(title || siteConfig.name)}&subtitle=${encodeURIComponent(seoDescription)}&type=${type === 'product' ? 'bot' : type}`

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: author ? [{ name: author }] : [{ name: siteConfig.name }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: canonical || url,
    },
    
    // Open Graph
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      title: seoTitle,
      description: seoDescription,
      url: url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        }
      ],
      locale: 'en_US',
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags
      })
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [ogImage],
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },

    // Additional meta tags
    other: {
      'application-name': siteConfig.name,
      'apple-mobile-web-app-title': siteConfig.name,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'msapplication-config': '/browserconfig.xml',
      'msapplication-TileColor': '#14b8a6',
      'msapplication-tap-highlight': 'no',
      'theme-color': '#14b8a6',
    }
  }

  return metadata
}

// Structured Data Schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/vortex-logo.jpg`,
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Vortex Team'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    availableLanguage: ['English', 'German']
  },
  sameAs: [
    'https://twitter.com/vortexgroup',
    'https://t.me/vortexgroup'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DE',
    addressRegion: 'Europe'
  }
}

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rust Rocket Trading Bot',
  description: 'Ultra-fast Telegram trading bot for Solana meme coins with sub-second execution',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Telegram, Web, Chrome Extension',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '2847',
    bestRating: '5',
    worstRating: '1'
  },
  featureList: [
    'Sub-second execution with Jito Bundle technology',
    'Non-custodial MPC wallet creation',
    '24/7 automated copy trading',
    'European infrastructure and compliance',
    'Real-time Solana DEX integration'
  ],
  screenshot: `${siteConfig.url}/vortex-product-suite.png`,
  downloadUrl: 'https://t.me/rustrocketbot',
  author: {
    '@type': 'Organization',
    name: siteConfig.name
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  features: string[]
  price?: string
  rating?: number
  ratingCount?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name
    },
    offers: {
      '@type': 'Offer',
      price: product.price || '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      ratingCount: product.ratingCount?.toString() || '100',
      bestRating: '5',
      worstRating: '1'
    } : undefined,
    additionalProperty: product.features.map(feature => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature
    }))
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateHowToSchema(howTo: {
  name: string
  description: string
  steps: { name: string; text: string }[]
  totalTime?: string
  supply?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime,
    supply: howTo.supply?.map(item => ({
      '@type': 'HowToSupply',
      name: item
    })),
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  }
}

export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}
