import type React from "react"
import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import SeoSchemas from "@/components/SeoSchemas"
import Hreflang from "@/components/Hreflang"
import { themeScript } from "@/lib/hooks/useTheme"
import AnalyticsProvider from "@/components/AnalyticsProvider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-lexend",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vortexgroup.xyz"),
  title: {
    default: "Professional Solana Trading Bot | Ultra-Fast Non-Custodial Trading – VortexGroup",
    template: "%s – VortexGroup | Professional Solana Trading",
  },
  description:
    "Trade Solana with institutional-grade speed (<0.4s execution). Non-custodial Telegram bot, Web DEX & Chrome extension. MiCA-compliant, European infrastructure for professional traders.",
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      "de-DE": "/de",
    },
  },
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
    "solana automated trading",
    "sub-second execution",
    "european trading infrastructure"
  ],
  authors: [{ name: "VortexGroup Team" }],
  creator: "VortexGroup",
  publisher: "VortexGroup",
  category: "Financial Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "VortexGroup – Professional Solana Trading | Ultra-Fast Non-Custodial",
    description: "Trade Solana with institutional-grade speed (<0.4s execution). Non-custodial Telegram bot, Web DEX & Chrome extension. MiCA-compliant European infrastructure.",
    url: "/",
    images: [
      {
        url: "/api/og?title=Professional%20Solana%20Trading&subtitle=Ultra-Fast%20Non-Custodial%20Trading&type=default",
        width: 1200,
        height: 630,
        alt: "VortexGroup - Professional Solana Trading Platform"
      }
    ],
    siteName: "VortexGroup",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vortexgroup_xyz",
    creator: "@vortexgroup_xyz",
    title: "VortexGroup – Professional Solana Trading",
    description: "Trade Solana with institutional-grade speed. Non-custodial, MiCA-compliant, European infrastructure.",
    images: ["/api/og?title=Professional%20Solana%20Trading&subtitle=Ultra-Fast%20Non-Custodial%20Trading&type=default"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "msapplication-TileColor": "#14b8a6",
  },
  generator: 'Next.js',
  applicationName: "VortexGroup Trading Platform",
  referrer: "origin-when-cross-origin",
}

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14b8a6" },
    { media: "(prefers-color-scheme: dark)", color: "#14b8a6" }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        
        {/* Favicons and Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//vercel.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        
        {/* Feed and alternate content */}
        <link rel="alternate" type="application/rss+xml" href="/api/rss" title="VortexGroup Blog Feed" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* OpenGraph and Twitter meta tags are handled by Next.js metadata */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VortexGroup" />
        
        {/* Language and region */}
        <Hreflang />
      </head>
      <body className={cn(inter.variable, lexend.variable, "bg-bg text-text font-inter")}>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        <SeoSchemas />
      </body>
    </html>
  )
}
