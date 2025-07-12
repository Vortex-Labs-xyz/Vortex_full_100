"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { useAnalytics } from "@/hooks/useAnalytics"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function HeroSection() {
  const { trackCTAClick, trackButtonClick, trackTelegramBotAccess } = useAnalytics()

  const handleMainCTAClick = () => {
    trackCTAClick("Start Trading Now", "hero_section", "primary")
    trackTelegramBotAccess()
  }

  const handleSecondaryClick = () => {
    trackButtonClick("Complete Guide", "hero_section", { action: "learn_more" })
  }

  return (
    <Section size="none" className="relative isolate overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(20, 184, 166, 0.1), transparent)",
        }}
      />

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-xl -z-10"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl -z-10"
        animate={{
          y: [10, -10, 10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto max-w-6xl px-container">
        <motion.div 
          className="mx-auto max-w-5xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-hero mb-6 leading-tight">
              Trade Lightning-Fast,<br />
              <span className="text-accent">Keep Your Keys</span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-body-large max-w-3xl mx-auto">
              Professional-grade Solana trading with <strong className="text-accent">sub-second execution</strong>. 
              Our non-custodial <a href="/products/bot" className="text-accent hover:underline font-semibold">Rust Rocket Telegram Bot</a> delivers 
              institutional performance with full key ownership.
            </p>
            

          </motion.div>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/products/bot"
              onClick={handleMainCTAClick}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Start Trading Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="/blog/solana-copy-trading-telegram-bots-2025"
              onClick={handleSecondaryClick}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-border text-text font-semibold rounded-lg hover:bg-accent/5 transition-all duration-200"
            >
              <span>Learn More</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 max-w-6xl sm:mt-20"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative group"
          >
            <Image
              src="/vortex-product-suite.png"
              alt="Vortex Group product suite showing the Telegram bot, the Raydium Web DEX, and the Chrome Extension."
              width={1200}
              height={800}
              className="relative w-full rounded-xl shadow-mock transition-all duration-300 group-hover:shadow-2xl"
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-teal-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
