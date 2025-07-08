import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import SeoSchemas from "@/components/SeoSchemas"
import Hreflang from "@/components/Hreflang"
import { themeScript } from "@/lib/hooks/useTheme"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vortexchain.xyz"),
  title: {
    default: "Non-Custodial Solana Trading Bot & DEX – VortexChain",
    template: "%s – VortexChain",
  },
  description:
    "Trade on Solana at millisecond latency. Own your keys. Telegram bot · Web DEX · Chrome extension. MiCA-ready.",
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      "de-DE": "/de",
    },
  },
  keywords: ["non-custodial solana bot", "telegram sniper bot", "solana mev", "copy trading", "miCA class 1 licence"],
  openGraph: {
    type: "website",
    title: "VortexChain – Non-Custodial Solana Trading",
    url: "/",
    images: "/og/default.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vortexchain_xyz",
  },
    generator: 'v0.dev'
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
        <link rel="alternate" type="application/rss+xml" href="/api/rss" title="VortexChain Blog Feed" />
        <Hreflang />
      </head>
      <body className={cn(inter.className, "bg-bg text-text")}>
        {children}
        <SeoSchemas />
      </body>
    </html>
  )
}
