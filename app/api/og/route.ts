import { NextResponse } from "next/server"

export const runtime = "edge"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get("title") ?? "Vortex Group"
    const subtitle = searchParams.get("subtitle") ?? "Ultra-Fast Solana Trading"
    const type = searchParams.get("type") ?? "default"

    // Get template colors and content based on type
    const getTemplate = (type: string) => {
      switch (type) {
        case 'bot':
          return {
            title: title || 'Rust Rocket Bot',
            subtitle: subtitle || 'Ultra-fast Telegram trading bot',
            gradient: 'linear-gradient(135deg, #14b8a6, #0891b2)',
            icon: '🚀'
          }
        case 'blog':
          return {
            title: title || 'Blog Post',
            subtitle: subtitle || 'Latest insights and updates',
            gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
            icon: '📖'
          }
        case 'faq':
          return {
            title: title || 'FAQ',
            subtitle: subtitle || 'Frequently Asked Questions',
            gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
            icon: '❓'
          }
        default:
          return {
            title: title || 'Vortex Group',
            subtitle: subtitle || 'Ultra-Fast Solana Trading',
            gradient: 'linear-gradient(135deg, #14b8a6, #0891b2)',
            icon: '⚡'
          }
      }
    }

    const template = getTemplate(type)

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#14b8a6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0891b2;stop-opacity:1" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.1"/>
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <!-- Background -->
        <rect fill="url(#bg)" width="100%" height="100%"/>
        
        <!-- Background Pattern -->
        <circle cx="240" cy="126" r="100" fill="rgba(255,255,255,0.05)" filter="blur(40px)"/>
        <circle cx="960" cy="504" r="80" fill="rgba(255,255,255,0.05)" filter="blur(30px)"/>
        <circle cx="480" cy="400" r="60" fill="rgba(255,255,255,0.03)" filter="blur(20px)"/>
        
        <!-- Main Content Container -->
        <rect x="100" y="150" width="1000" height="300" rx="20" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
        
        <!-- Icon with glow effect -->
        <text x="600" y="220" fill="white" font-size="80" font-family="Inter, sans-serif" text-anchor="middle" filter="url(#glow)">${template.icon}</text>
        
        <!-- Title with enhanced styling -->
        <text x="600" y="310" fill="white" font-size="56" font-family="Inter, sans-serif" font-weight="bold" text-anchor="middle" filter="url(#shadow)">${template.title}</text>
        
        <!-- Subtitle -->
        <text x="600" y="370" fill="rgba(255,255,255,0.9)" font-size="24" font-family="Inter, sans-serif" text-anchor="middle">${template.subtitle}</text>
        

        
        <!-- Enhanced Brand Badge -->
        <rect x="1000" y="540" width="180" height="70" rx="35" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
        <text x="1020" y="570" fill="white" font-size="28" filter="url(#glow)">⚡</text>
        <text x="1055" y="575" fill="white" font-size="18" font-family="Inter, sans-serif" font-weight="bold">vortexgroup.xyz</text>
        <text x="1055" y="595" fill="rgba(255,255,255,0.8)" font-size="12" font-family="Inter, sans-serif">Solana Trading</text>
        
        <!-- Decorative elements -->
        <rect x="50" y="50" width="4" height="60" fill="rgba(255,255,255,0.3)" rx="2"/>
        <rect x="1146" y="520" width="4" height="60" fill="rgba(255,255,255,0.3)" rx="2"/>
        <circle cx="80" cy="580" r="3" fill="rgba(255,255,255,0.4)"/>
        <circle cx="1120" cy="80" r="3" fill="rgba(255,255,255,0.4)"/>
      </svg>
    `

    return new NextResponse(svg, { 
      headers: { 
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000, immutable"
      } 
    })
  } catch (e: unknown) {
    console.error(`${e instanceof Error ? e.message : 'Unknown error'}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
