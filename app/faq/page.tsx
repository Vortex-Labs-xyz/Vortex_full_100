import { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateSEO, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Bot, Zap, Shield, Clock, Users, HelpCircle } from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEO({
    title: "Frequently Asked Questions - Rust Rocket Trading Bot",
    description: "Get answers to common questions about Rust Rocket Telegram bot, Solana trading, copy trading, MPC wallets, and more. Complete FAQ guide.",
    keywords: [
      "rust rocket faq",
      "telegram bot questions",
      "solana trading faq",
      "copy trading help",
      "mpc wallet questions",
      "trading bot support",
      "solana meme coin faq",
      "jito bundle questions"
    ],
    url: "https://vortexgroup.xyz/faq",
    type: "website"
  })
}

const faqCategories = [
  {
    title: "Getting Started",
    icon: Bot,
    color: "bg-blue-100 text-blue-700",
    faqs: [
      {
        question: "What is Rust Rocket and how does it work?",
        answer: "Rust Rocket is an ultra-fast Telegram trading bot for Solana meme coins. It uses advanced Rust engine technology and Jito Bundle integration to execute trades in under 0.4 seconds. The bot operates directly within Telegram, requiring no additional apps or interfaces."
      },
      {
        question: "How do I start using Rust Rocket?",
        answer: "Simply join our Telegram bot @RustRocketBot, complete the quick setup process, and start trading. No KYC required, no seed phrases needed - your MPC wallet is created automatically and securely."
      },
      {
        question: "Is Rust Rocket free to use?",
        answer: "Yes, Rust Rocket is free to start using. We charge a small fee only on successful trades (0.75% per transaction). There are no subscription fees, setup costs, or hidden charges."
      },
      {
        question: "What makes Rust Rocket different from other trading bots?",
        answer: "Rust Rocket combines sub-0.4s execution speed, non-custodial MPC wallet security, European infrastructure compliance, and 24/7 automation. Our transparent team operates from Germany and Liechtenstein with full regulatory compliance."
      }
    ]
  },
  {
    title: "Trading & Execution",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-700",
    faqs: [
      {
        question: "How fast is Rust Rocket's execution speed?",
        answer: "Rust Rocket delivers execution speeds under 0.4 seconds using our custom Rust engine and Jito Bundle technology. This pushes transactions directly to the block leader, bypassing mempool delays and outperforming standard trading bots by 10x."
      },
      {
        question: "What is Jito Bundle technology?",
        answer: "Jito Bundle is a transaction bundling service that allows direct submission to Solana validators. This bypasses the public mempool, reducing MEV attacks and ensuring faster, more reliable transaction execution."
      },
      {
        question: "Can I snipe new token launches?",
        answer: "Absolutely! Rust Rocket is optimized for token sniping with launch detection algorithms, bonding curve analysis, and rug protection. Set your parameters and let the bot automatically snipe profitable opportunities."
      },
      {
        question: "How does copy trading work?",
        answer: "Select successful traders from our curated list, set your copy parameters (amount, risk level, tokens to copy), and Rust Rocket will automatically mirror their trades with gas optimization and risk management."
      }
    ]
  },
  {
    title: "Security & Wallets",
    icon: Shield,
    color: "bg-green-100 text-green-700",
    faqs: [
      {
        question: "How secure is my wallet with Rust Rocket?",
        answer: "Rust Rocket uses non-custodial MPC (Multi-Party Computation) wallet technology. Your private keys are never stored on our servers and are protected by advanced cryptographic techniques. You maintain full control of your funds at all times."
      },
      {
        question: "What is an MPC wallet and why is it better?",
        answer: "MPC wallets use distributed cryptography to secure your funds without traditional seed phrases. This eliminates single points of failure while maintaining non-custodial security. Your wallet is created instantly and secured automatically."
      },
      {
        question: "Can I withdraw my funds anytime?",
        answer: "Yes, you have complete control over your funds 24/7. Withdraw to any Solana wallet address instantly. There are no withdrawal limits, lockup periods, or approval processes."
      },
      {
        question: "What happens if Rust Rocket goes offline?",
        answer: "Your funds remain secure in your non-custodial MPC wallet. You can always recover and access your funds independently, even if our service is unavailable. Your wallet security is never dependent on our platform."
      }
    ]
  },
  {
    title: "Copy Trading",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
    faqs: [
      {
        question: "How do I choose which traders to copy?",
        answer: "Browse our leaderboard of verified profitable traders, review their performance metrics, trading history, and risk profiles. Start with small amounts and gradually increase as you gain confidence in their strategies."
      },
      {
        question: "Can I set limits on copy trading?",
        answer: "Yes, you can set maximum trade amounts, stop-loss levels, profit targets, and specific tokens to include or exclude. Full risk management controls are available for every copied trader."
      },
      {
        question: "How much does copy trading cost?",
        answer: "Copy trading uses the same fee structure as manual trading - 0.75% per successful trade. There are no additional copy trading fees or subscription costs."
      },
      {
        question: "Can I stop copy trading anytime?",
        answer: "Absolutely. You can pause, stop, or modify copy trading settings instantly. All changes take effect immediately, giving you full control over your trading strategy."
      }
    ]
  },
  {
    title: "Technical & Support",
    icon: Clock,
    color: "bg-red-100 text-red-700",
    faqs: [
      {
        question: "What if I encounter technical issues?",
        answer: "Our support team is available 24/7 through Telegram. We also have comprehensive documentation, video tutorials, and a community forum for peer support and troubleshooting."
      },
      {
        question: "Does Rust Rocket work on mobile?",
        answer: "Yes, Rust Rocket works perfectly on mobile devices through the Telegram app. All features are fully functional on both iOS and Android devices with the same performance and security."
      },
      {
        question: "Can I use Rust Rocket from any country?",
        answer: "Rust Rocket is available globally, but please check your local regulations regarding cryptocurrency trading. We comply with European standards and recommend users verify compliance with their local laws."
      },
      {
        question: "How do I report bugs or suggest features?",
        answer: "Contact our development team through Telegram support or email. We actively collect user feedback and regularly update Rust Rocket with new features and improvements based on community suggestions."
      }
    ]
  }
]

export default function FAQPage() {
  // Collect all FAQs for structured data
  const allFAQs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  )

  const breadcrumbs = [
    { name: "Home", url: "https://vortexgroup.xyz" },
    { name: "FAQ", url: "https://vortexgroup.xyz/faq" }
  ]

  const faqSchema = generateFAQSchema(allFAQs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [faqSchema, breadcrumbSchema]
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <Section size="large" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 -z-10" />
          <div className="container mx-auto max-w-4xl px-container text-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit mx-auto">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Support Center
                </Badge>
                <Heading as="h1" level="h1" className="text-4xl sm:text-5xl">
                  Frequently Asked Questions
                </Heading>
                <p className="text-xl text-textSub max-w-2xl mx-auto">
                  Get instant answers to common questions about Rust Rocket trading bot, 
                  Solana trading, and our platform features.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-textSub">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-textSub">FAQ Topics</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">&lt;1min</div>
                  <div className="text-sm text-textSub">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-textSub">Resolution Rate</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Categories */}
        <Section background="subtle" size="large">
          <div className="container mx-auto max-w-6xl px-container">
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <Heading as="h2" level="h2" className="text-2xl">
                        {category.title}
                      </Heading>
                      <p className="text-textSub">
                        {category.faqs.length} questions answered
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <Card key={faqIndex} className="p-6 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg font-semibold text-left">
                            {faq.question}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-base leading-relaxed text-textSub">
                            {faq.answer}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Support */}
        <Section size="large">
          <div className="container mx-auto max-w-4xl px-container text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Heading as="h2" level="h2">
                  Still Have Questions?
                </Heading>
                <p className="text-xl text-textSub">
                  Our support team is available 24/7 to help you with any questions or issues.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Bot className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle>Telegram Support</CardTitle>
                    <CardDescription>
                      Get instant help from our bot or chat with support team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="https://t.me/vortexgroupsupport" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Open Telegram
                    </a>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle>Community Forum</CardTitle>
                    <CardDescription>
                      Join our community to get help from other traders
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="https://t.me/vortexgroupcommunity" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Join Community
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
} 