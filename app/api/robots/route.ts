import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  const baseUrl = 'https://vortexgroup.xyz'
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Specific crawl rules
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 2

# Block specific paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow important API endpoints for SEO
Allow: /api/og
Allow: /api/sitemap
Allow: /api/robots

# Host declaration
Host: ${baseUrl}
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
} 