import { Zap, KeyRound, Bot, ShieldCheck } from "lucide-react"
import { Section } from "@/components/ui/section"

const features = [
  {
    icon: Zap,
    title: "<0.4s Execution Direct to Block",
    description: "Our Rust engine pushes your transaction with Jito-Bundle technology directly to the leader – faster than all standard bots."
  },
  {
    icon: KeyRound,
    title: "MPC Wallet in Seconds – No Seed",
    description: "Non-custodial wallet starts automatically. Secure, anonymous, MiCA-ready – instantly usable in Telegram."
  },
  {
    icon: Bot,
    title: "Copy Trading in Telegram 24/7",
    description: "Follow the most profitable wallets live and gas-optimized. No interface, no login – full automation."
  },
  {
    icon: ShieldCheck,
    title: "Maximum Security, Real Structures",
    description: "Hosted in Europe, operated by professionals from Germany & Liechtenstein. No shadow team, no rug."
  }
]

export default function FeaturesCardSection() {
  return (
    <Section id="features-unique" size="default" background="default">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-[#F4F5F7] rounded-[32px] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
          role="region"
          aria-labelledby="features-heading"
        >
          <h2 
            id="features-heading"
            className="text-2xl sm:text-3xl md:text-[32px] font-bold text-center text-[#131313] mb-8 sm:mb-10 md:mb-12 leading-tight"
          >
            What makes us unique
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="group">
                  <div className="flex gap-3 sm:gap-4 items-start">
                    <div 
                      className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white flex items-center justify-center shadow-sm border border-gray-100"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    
                    <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-[20px] font-bold text-[#131313] leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {index < features.length - 1 && (
                    <div 
                      className="mt-6 sm:mt-8 h-px bg-[#EAEAEA]" 
                      role="separator"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
} 