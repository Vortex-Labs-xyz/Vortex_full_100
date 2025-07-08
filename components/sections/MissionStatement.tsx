"use client"
import { motion, Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
}

export default function MissionStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:py-24 relative">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
        className="relative z-10"
      >
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
          className="mb-6 text-lg font-bold text-textSub tracking-widest sm:mb-8 sm:text-xl uppercase"
        >
          Our Mission
        </motion.h2>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative group cursor-default"
        >
          <motion.p 
            className="text-textSub leading-relaxed text-base sm:text-lg lg:text-xl relative z-10 transition-all duration-500 group-hover:text-text"
            animate={{
              y: isHovered ? -4 : 0,
              transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          >
            We develop{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-accent transition-all duration-500">
                high-performance trading infrastructure
              </span>
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-blue-400 opacity-0 group-hover:opacity-100"
                initial={{ width: "0%" }}
                animate={{ 
                  width: isHovered ? "100%" : "0%",
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              />
            </span>{" "}
            that detects opportunities before they become visible. Our systems are engineered for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold bg-gradient-to-r from-blue-400 to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-blue-400 transition-all duration-500">
                speed, precision, and reliability
              </span>
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-accent opacity-0 group-hover:opacity-100"
                initial={{ width: "0%" }}
                animate={{ 
                  width: isHovered ? "100%" : "0%",
                  transition: { duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              />
            </span>{" "}
            in the volatile world of Solana assets.
          </motion.p>
          
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/5 via-blue-400/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              scale: isHovered ? 1.05 : 1,
              transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          />
          
          {/* Subtle border highlight */}
          <motion.div
            className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/20 transition-all duration-500"
            animate={{
              opacity: isHovered ? 1 : 0,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
          className="mt-8 flex justify-center space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-accent/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-30 pointer-events-none" />
    </section>
  )
}
