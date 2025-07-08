"use client"

import Image from "next/image"
import { CTAButton } from "@/components/ui/cta-button"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"

export default function HeroSection() {
  return (
    <Section size="none" className="relative isolate overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(20, 184, 166, 0.1), transparent)",
        }}
      />

      <div className="container mx-auto max-w-6xl px-container">
        <div className="mx-auto max-w-4xl text-center">
          <Heading 
            as="h1" 
            align="center"
            className="animate-fadeInUp"
          >
            Trade faster – keep your keys.
          </Heading>
          <p className="mt-4 text-base text-textSub sm:mt-6 sm:text-lg animate-fadeInUp animation-delay-100">
            Non-custodial Telegram-Bot, Web-DEX & Chrome-Extension. MiCA-ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp animation-delay-200">
            <CTAButton variant="primary">
              Connect Wallet
            </CTAButton>
            <CTAButton variant="link">
              Join Beta Waitlist
            </CTAButton>
          </div>
        </div>

        <div className="relative mx-auto mt-16 w-full max-w-5xl sm:mt-20 animate-scaleIn animation-delay-300">
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-accent/30 to-transparent opacity-50 blur-xl" />
          <Image
            src="/vortex-product-suite.png"
            alt="VortexChain product suite showing the Telegram bot, the Raydium Web DEX, and the Chrome Extension."
            width={1200}
            height={800}
            className="relative w-full rounded-xl shadow-mock"
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </Section>
  )
}
