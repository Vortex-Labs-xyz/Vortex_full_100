import { NextResponse } from 'next/server'
import { products } from '@/lib/products-config'

export const runtime = 'edge'

export async function GET() {
  const baseUrl = 'https://vortexgroup.xyz'
  const currentDate = new Date().toISOString()

  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/faq`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    }
  ]

  // Product pages
  const productPages = products.map(product => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: product.slug === 'bot' ? 0.9 : 0.6
  }))

  // Blog posts with hreflang
  const blogPosts = [
    {
      url: `${baseUrl}/blog/solana-copy-trading-telegram-bots-2025`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/blog/2025-06-20_global-node-footprint`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/blog/2025-06-26_fpga-edge`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/blog/2025-06-28_mica-countdown`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/blog/2025-07-01_non-custody-vs-custody`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/blog/2025-07-02_jito-insights`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    }
  ]

  // Glossary pages for semantic linking
  const glossaryPages = [
    {
      url: `${baseUrl}/glossary/sniping`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/glossary/mev`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/glossary/jito-bundle`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/glossary/mpc-wallet`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.4
    }
  ]

  // Localized pages
  const localizedPages = [
    {
      url: `${baseUrl}/de`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/de/products/bot`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    }
  ]

  // Combine all pages
  const allPages = [...staticPages, ...productPages, ...blogPosts, ...glossaryPages, ...localizedPages]

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
} 