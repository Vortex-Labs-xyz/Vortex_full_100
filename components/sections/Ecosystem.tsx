"use client"
import { motion, Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const logoVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function Ecosystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const logos = [
    { name: "solana", alt: "Solana - High-performance blockchain" },
    { name: "raydium", alt: "Raydium - Automated market maker" },
    { name: "orca", alt: "Orca - User-friendly DEX" },
    { name: "jito", alt: "Jito - MEV infrastructure" },
    { name: "bloxroute", alt: "bloXroute - Network optimization" },
    { name: "turnkey", alt: "Turnkey - Wallet infrastructure" },
    { name: "helius", alt: "Helius - RPC infrastructure" },
    { name: "phantom", alt: "Phantom - Solana wallet" }
  ]

  return (
    <section id="ecosystem" className="py-16 bg-bg sm:py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
            }}
            className="text-2xl font-bold text-text sm:text-3xl lg:text-4xl mb-4"
          >
            Built on a proven, high-performance ecosystem
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } }
            }}
            className="text-base text-textSub sm:text-lg max-w-2xl mx-auto"
          >
            From execution speed to non-custodial security – every layer is battle-tested.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-5xl grid grid-cols-4 gap-6 sm:gap-8 justify-items-center items-center md:grid-cols-8"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              variants={logoVariants}
              custom={index}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="group relative p-3 rounded-lg transition-all duration-300 hover:bg-white/5"
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <motion.img
                src={`/icons/${logo.name}.png`}
                alt={logo.alt}
                className="h-8 w-auto transition-all duration-300 sm:h-10 group-hover:brightness-110"
                style={{
                filter: "grayscale(1) invert(1) brightness(0.7) contrast(2)",
                }}
                whileHover={{
                  filter: "grayscale(0.5) invert(1) brightness(0.9) contrast(2)",
                  transition: { duration: 0.3 }
              }}
            />
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,123,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,123,255,0.4)]" />
              
              {/* Subtle background highlight */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Background gradient for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-50 pointer-events-none" />
      </div>
    </section>
  )
}
