"use client"
import { motion, Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, Smartphone, PlayCircle } from "lucide-react"
import { Section } from "@/components/ui/section"
import Image from "next/image"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
}

const steps = [
  {
    icon: "image", // Special marker for image icon
    description: "First, you create your Rust Rocket workspace."
  },
  {
    icon: Smartphone,
    description: "Then you connect the bot to Telegram."
  },
  {
    icon: PlayCircle,
    description: "And the Rust Rocket Bot handles the rest."
  }
]

export default function HowToStartRustRocket() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section className="py-16 sm:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4"
            variants={itemVariants}
          >
            Getting Started
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-textSub max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Learn quickly how to set up the Rust Rocket Bot and get started immediately.
          </motion.p>
        </motion.div>

        {/* Three Steps Section */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="text-center p-6 border border-[#EAEAEA] shadow-sm rounded-xl bg-surface hover:shadow-md transition-all duration-200"
            >
              {/* Icon Container */}
              <motion.div 
                className="w-16 h-16 bg-accentSoft rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                {step.icon === "image" ? (
                  <Image
                    src="/RR_favicon-32x32.png"
                    alt="Rust Rocket Logo"
                    width={32}
                    height={32}
                    className="rounded-sm"
                  />
                ) : (
                  <step.icon className="w-8 h-8 text-accent" />
                )}
              </motion.div>

              {/* Content */}
              <p className="text-text leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center space-y-6"
        >
          <motion.div
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-surface rounded-2xl shadow-xl overflow-hidden border border-border">
              {/* YouTube Embed Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-blue-400/10">
                <motion.div 
                  className="text-center space-y-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-accent border-y-[8px] border-y-transparent ml-1" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-text">Rust Rocket Bot Demo</p>
                    <p className="text-sm text-textSub">See how easy it is to get started</p>
                  </div>
                </motion.div>
              </div>

              {/* Future YouTube iframe would go here */}
              {/* 
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Rust Rocket Bot Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </motion.div>

          {/* Call-to-Action */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="https://youtube.com/@rustrocket"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Watch the full video on our YouTube channel
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
} 