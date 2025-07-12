import type { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Zap, Target, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is Sniping in Solana Trading? - Complete Guide',
  description: 'Learn about sniping in Solana trading: how it works, benefits, and how Rust Rocket Bot executes snipes in under 0.4 seconds with MEV protection.',
  keywords: [
    'solana sniping',
    'sniper bot',
    'token sniping',
    'solana trading',
    'mev protection',
    'rust rocket bot',
    'telegram sniper bot'
  ],
  openGraph: {
    title: 'What is Sniping in Solana Trading? - Complete Guide',
    description: 'Learn about sniping in Solana trading: how it works, benefits, and how Rust Rocket Bot executes snipes in under 0.4 seconds with MEV protection.',
    images: [
      {
        url: '/api/og?title=Solana%20Sniping%20Guide&subtitle=Complete%20Trading%20Dictionary&type=blog',
        width: 1200,
        height: 630,
        alt: 'Solana Sniping Guide'
      }
    ]
  }
}

export default function SnipingGlossary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link href="/glossary" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Glossary
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Trading Term
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              What is Sniping in Solana Trading?
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete guide to understanding and executing snipes on Solana with professional-grade tools
            </p>
          </div>

          {/* Main Definition */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                Definition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                <strong>Sniping</strong> in Solana trading refers to the practice of executing trades at the exact moment a new token becomes available for trading, typically within milliseconds of a liquidity pool being created or unlocked.
              </p>
              <p className="text-muted-foreground">
                Professional snipers use automated bots to monitor the blockchain for new token launches and execute buy orders faster than human traders, often securing tokens at the lowest possible prices before others can react.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How Sniping Works</CardTitle>
              <CardDescription>
                The technical process behind successful token sniping
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Pool Monitoring</h3>
                    <p className="text-sm text-muted-foreground">
                      Bots continuously monitor Solana for new liquidity pool creations on DEXs like Raydium, Orca, and Jupiter.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Instant Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      When a new token is detected, the bot analyzes the contract for safety and potential.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Lightning Execution</h3>
                    <p className="text-sm text-muted-foreground">
                      Within milliseconds, the bot executes a buy order using pre-configured parameters.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits & Risks */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Get tokens at the lowest possible price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">First-mover advantage on new projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Automated execution without manual monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Higher profit potential on successful picks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Potential for rug pulls and scam tokens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">High volatility and potential losses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">MEV attacks and front-running</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Failed transactions and gas fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Rust Rocket Bot Integration */}
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Professional Sniping with Rust Rocket Bot
              </CardTitle>
              <CardDescription>
                How our Telegram bot executes snipes with industry-leading speed and protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">⚡ &lt;0.4s execution</Badge>
                  <Badge variant="secondary">🛡️ MEV protection</Badge>
                  <Badge variant="secondary">🎯 Smart contract analysis</Badge>
                  <Badge variant="secondary">🔄 Auto-retry logic</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Rust Rocket Bot combines blazing-fast execution with comprehensive safety features, 
                  including <Link href="/glossary/mev" className="text-primary hover:underline">MEV protection</Link> through 
                  <Link href="/glossary/jito-bundle" className="text-primary hover:underline"> Jito bundles</Link> and 
                  smart contract verification to minimize risks.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/products/bot">
                      Try Rust Rocket Bot
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/blog/telegram-sniper-bot-guide">
                      Read Tutorial
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Related Terms</CardTitle>
              <CardDescription>
                Other important concepts in Solana trading
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/glossary/mev" className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="font-semibold text-sm">MEV Protection</div>
                  <div className="text-xs text-muted-foreground">Maximal Extractable Value</div>
                </Link>
                <Link href="/glossary/jito-bundle" className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="font-semibold text-sm">Jito Bundles</div>
                  <div className="text-xs text-muted-foreground">Transaction bundling</div>
                </Link>
                <Link href="/glossary/mpc-wallet" className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="font-semibold text-sm">MPC Wallet</div>
                  <div className="text-xs text-muted-foreground">Multi-Party Computation</div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTerm',
            '@id': 'https://vortexgroup.xyz/glossary/sniping',
            name: 'Sniping',
            description: 'The practice of executing trades at the exact moment a new token becomes available for trading on Solana DEXs',
            termCode: 'SNIPING',
            inDefinedTermSet: {
              '@type': 'DefinedTermSet',
              name: 'Solana Trading Glossary',
              url: 'https://vortexgroup.xyz/glossary'
            },
            partOf: {
              '@type': 'CreativeWork',
              name: 'VortexGroup Trading Guide',
              url: 'https://vortexgroup.xyz/blog/telegram-sniper-bot-guide'
            }
          })
        }}
      />
    </div>
  )
} 