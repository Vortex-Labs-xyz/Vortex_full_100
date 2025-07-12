import type { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Clock, TrendingUp, Shield, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Telegram Sniper Bot Guide - Rust Rocket Tutorial',
  description: 'Step-by-step guide to master Solana trading with Rust Rocket Bot. Learn sniping, copy trading, and MEV protection in under 5 minutes.',
  keywords: [
    'telegram sniper bot guide',
    'solana trading tutorial',
    'rust rocket bot tutorial',
    'copy trading guide',
    'mev protection',
    'solana sniper bot',
    'telegram trading bot',
    'defi trading guide'
  ],
  openGraph: {
    title: 'Complete Telegram Sniper Bot Guide - Rust Rocket Tutorial',
    description: 'Step-by-step guide to master Solana trading with Rust Rocket Bot. Learn sniping, copy trading, and MEV protection in under 5 minutes.',
    images: [
      {
        url: '/api/og?title=Telegram%20Sniper%20Bot%20Guide&subtitle=Complete%20Rust%20Rocket%20Tutorial&type=blog',
        width: 1200,
        height: 630,
        alt: 'Telegram Sniper Bot Guide'
      }
    ]
  }
}

const steps = [
  {
    step: 1,
    title: 'Connect to Rust Rocket Bot',
    description: 'Open Telegram and search for @rustrocketbot',
    details: 'Click "Start" to begin the setup process. The bot will guide you through the initial configuration.',
    time: '30 seconds',
    icon: <Users className="w-5 h-5" />
  },
  {
    step: 2,
    title: 'Create Your Non-Custodial Wallet',
    description: 'Generate a secure MPC wallet that you fully control',
    details: 'Follow the bot instructions to create your wallet. Save your recovery phrase securely - you\'ll need it to recover your wallet.',
    time: '2 minutes',
    icon: <Shield className="w-5 h-5" />
  },
  {
    step: 3,
    title: 'Fund Your Trading Wallet',
    description: 'Transfer SOL tokens to your newly created wallet address',
    details: 'Copy your wallet address from the bot and send SOL from your main wallet. Start with a small amount for testing.',
    time: '1 minute',
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    step: 4,
    title: 'Configure Trading Settings',
    description: 'Set slippage tolerance, trade size, and copy trading preferences',
    details: 'Adjust slippage (recommended: 1-5%), set maximum trade size, and choose copy trading targets.',
    time: '1 minute',
    icon: <Zap className="w-5 h-5" />
  },
  {
    step: 5,
    title: 'Start Trading',
    description: 'Use commands like /buy, /sell, or enable copy trading',
    details: 'Execute your first trade with /buy [token_address] or enable copy trading to follow successful traders.',
    time: '30 seconds',
    icon: <CheckCircle className="w-5 h-5" />
  }
]

const faqs = [
  {
    question: 'What is Telegram Sniper Bot?',
    answer: 'A Telegram sniper bot is an automated trading tool that executes trades on Solana DEXs in milliseconds. Rust Rocket Bot is the fastest, executing trades in under 0.4 seconds with MEV protection.'
  },
  {
    question: 'How to copy trade on Solana?',
    answer: 'Copy trading on Solana involves automatically replicating successful traders\' transactions. Our bot monitors top performers and executes their strategies in real-time using Jito bundles for MEV protection.'
  },
  {
    question: 'Is it safe to use trading bots?',
    answer: 'Yes, when using non-custodial bots like Rust Rocket. You maintain full control of your private keys through MPC technology. We never have access to your funds.'
  },
  {
    question: 'What is the minimum amount to start?',
    answer: 'You can start with as little as 0.1 SOL. We recommend starting small to test the bot\'s features before scaling up your trading volume.'
  },
  {
    question: 'How much does it cost?',
    answer: 'Rust Rocket Bot costs 0.75 SOL for lifetime access. There are no monthly fees or hidden charges - just a one-time payment for unlimited trading.'
  }
]

export default function TelegramSniperBotGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              5-minute setup
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Complete Telegram Sniper Bot Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master Solana trading with Rust Rocket Bot - the fastest Telegram trading bot with &lt;0.4s execution time
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary">⚡ Sub-400ms execution</Badge>
              <Badge variant="secondary">🛡️ MEV protection</Badge>
              <Badge variant="secondary">📱 Non-custodial</Badge>
              <Badge variant="secondary">🚀 Copy trading</Badge>
            </div>
          </div>

          {/* Step-by-step Guide */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Step-by-Step Tutorial
              </CardTitle>
              <CardDescription>
                Follow these 5 simple steps to start trading on Solana with professional-grade tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        {step.icon}
                        <div>
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        <Badge variant="outline" className="ml-auto">
                          {step.time}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground ml-8 mt-2">
                        {step.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Everything you need to know about Telegram sniper bots and Solana trading
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
              <p className="text-muted-foreground mb-6">
                Join 2,847+ traders using Rust Rocket Bot for lightning-fast Solana trading
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="https://t.me/rustrocketbot" target="_blank" rel="noopener noreferrer">
                    Start Trading Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/products/bot">
                    Learn More
                  </a>
                </Button>
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
            '@type': 'HowTo',
            name: 'How to Use Telegram Sniper Bot for Solana Trading',
            description: 'Complete guide to using Rust Rocket Bot for fast Solana trading with copy trading and MEV protection',
            image: 'https://vortexgroup.xyz/api/og?title=Telegram%20Sniper%20Bot%20Guide&subtitle=Complete%20Rust%20Rocket%20Tutorial&type=blog',
            totalTime: 'PT5M',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'SOL',
              value: '0.75'
            },
            supply: [
              'Telegram account',
              'Solana wallet',
              'SOL tokens for trading'
            ],
            tool: [
              {
                '@type': 'SoftwareApplication',
                name: 'Rust Rocket Bot',
                url: 'https://t.me/rustrocketbot'
              }
            ],
            step: steps.map(step => ({
              '@type': 'HowToStep',
              name: step.title,
              text: step.description + ' - ' + step.details,
              position: step.step
            }))
          })
        }}
      />
    </div>
  )
} 