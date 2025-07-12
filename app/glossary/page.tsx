import type { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solana Trading Glossary - Complete Guide | VortexGroup',
  description: 'Complete glossary of Solana trading terms: sniping, MEV protection, MPC wallets, Jito bundles, and more. Learn DeFi terminology with VortexGroup.',
  keywords: [
    'solana trading glossary',
    'defi terminology',
    'trading dictionary',
    'sniping definition',
    'mev protection',
    'mpc wallet',
    'jito bundles',
    'solana terms'
  ],
  openGraph: {
    title: 'Solana Trading Glossary - Complete Guide',
    description: 'Complete glossary of Solana trading terms: sniping, MEV protection, MPC wallets, Jito bundles, and more.',
    images: [
      {
        url: '/api/og?title=Solana%20Trading%20Glossary&subtitle=Complete%20DeFi%20Dictionary&type=blog',
        width: 1200,
        height: 630,
        alt: 'Solana Trading Glossary'
      }
    ]
  }
}

const glossaryTerms = [
  {
    term: 'Sniping',
    slug: 'sniping',
    definition: 'The practice of executing trades at the exact moment a new token becomes available for trading',
    category: 'Trading Strategy',
    difficulty: 'Intermediate',
    relatedTerms: ['MEV Protection', 'Jito Bundles', 'Copy Trading']
  },
  {
    term: 'MEV Protection',
    slug: 'mev',
    definition: 'Maximal Extractable Value protection shields traders from front-running and sandwich attacks',
    category: 'Security',
    difficulty: 'Advanced',
    relatedTerms: ['Sniping', 'Jito Bundles', 'Private Mempool']
  },
  {
    term: 'MPC Wallet',
    slug: 'mpc-wallet',
    definition: 'Multi-Party Computation wallet that provides non-custodial security without seed phrases',
    category: 'Technology',
    difficulty: 'Advanced',
    relatedTerms: ['Non-Custodial', 'Private Keys', 'Wallet Security']
  },
  {
    term: 'Jito Bundles',
    slug: 'jito-bundle',
    definition: 'Transaction bundling technology that enables MEV protection and atomic execution',
    category: 'Technology',
    difficulty: 'Advanced',
    relatedTerms: ['MEV Protection', 'Atomic Transactions', 'Block Building']
  },
  {
    term: 'Copy Trading',
    slug: 'copy-trading',
    definition: 'Automatically replicating the trades of successful traders in real-time',
    category: 'Trading Strategy',
    difficulty: 'Beginner',
    relatedTerms: ['Social Trading', 'Mirror Trading', 'Performance Tracking']
  },
  {
    term: 'Liquidity Pool',
    slug: 'liquidity-pool',
    definition: 'Smart contracts that hold tokens to facilitate decentralized trading',
    category: 'DeFi',
    difficulty: 'Intermediate',
    relatedTerms: ['AMM', 'Liquidity Mining', 'Impermanent Loss']
  }
]

const categories = Array.from(new Set(glossaryTerms.map(term => term.category)))

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Complete Dictionary
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Solana Trading Glossary
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the terminology of Solana trading, DeFi, and blockchain technology. 
              From basic concepts to advanced strategies - your complete reference guide.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search terms..."
              className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="px-4 py-2">
                  {category}
                  <span className="ml-2 text-xs opacity-75">
                    {glossaryTerms.filter(term => term.category === category).length}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid gap-6">
            {glossaryTerms.map((term, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {term.term}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {term.category}
                        </Badge>
                        <Badge 
                          variant={term.difficulty === 'Beginner' ? 'default' : term.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                          className="text-xs"
                        >
                          {term.difficulty}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {term.definition}
                      </CardDescription>
                    </div>
                    <Link 
                      href={`/glossary/${term.slug}`}
                      className="flex-shrink-0 p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Related Terms</h4>
                    <div className="flex flex-wrap gap-2">
                      {term.relatedTerms.map((relatedTerm, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {relatedTerm}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
              <p className="text-muted-foreground mb-6">
                Apply your knowledge with Rust Rocket Bot - the fastest Solana trading bot
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/products/bot"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Try Rust Rocket Bot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  href="/blog/telegram-sniper-bot-guide"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Read Tutorial
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            '@id': 'https://vortexgroup.xyz/glossary#breadcrumb',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://vortexgroup.xyz'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Glossary',
                item: 'https://vortexgroup.xyz/glossary'
              }
            ]
          })
        }}
      />

      {/* Glossary Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            '@id': 'https://vortexgroup.xyz/glossary#termset',
            name: 'Solana Trading Glossary',
            description: 'Complete glossary of Solana trading and DeFi terminology',
            url: 'https://vortexgroup.xyz/glossary',
            publisher: {
              '@type': 'Organization',
              '@id': 'https://vortexgroup.xyz/#organization'
            },
            hasDefinedTerm: glossaryTerms.map(term => ({
              '@type': 'DefinedTerm',
              name: term.term,
              description: term.definition,
              termCode: term.slug.toUpperCase(),
              url: `https://vortexgroup.xyz/glossary/${term.slug}`
            }))
          })
        }}
      />
    </div>
  )
} 