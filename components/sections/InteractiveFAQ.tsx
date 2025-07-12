"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Section } from "@/components/ui/section"

const faqs = [
  {
    question: "How fast is the execution really?",
    answer: "Our Rust-based engine achieves sub-400ms execution times by using Jito-Bundle technology to send transactions directly to block leaders. This bypasses the mempool and ensures faster execution than standard bots."
  },
  {
    question: "Is my wallet really non-custodial?",
    answer: "Yes, absolutely. Your private keys are generated using MPC (Multi-Party Computation) technology and remain encrypted on your device. Vortex Group never has access to your funds or private keys."
  },
  {
    question: "What makes Vortex Group MiCA-compliant?",
    answer: "We operate under European regulations with proper licensing, maintain transparent operations from Germany & Liechtenstein, and implement strict KYC/AML procedures. Our infrastructure is hosted in Europe with full regulatory compliance."
  },
  {
    question: "How does copy trading work?",
    answer: "Our system monitors profitable wallets in real-time and automatically replicates their trades with gas optimization. You can follow multiple wallets simultaneously through our Telegram bot without any manual intervention."
  },
  {
    question: "Can I use this on mobile?",
    answer: "Yes! Our Telegram bot works perfectly on mobile devices. Additionally, we offer a Chrome extension for desktop trading and a responsive web interface that works on all devices."
  },
  {
    question: "What are the fees?",
    answer: "We charge a small percentage of successful trades plus gas fees. There are no subscription fees or hidden costs. You only pay when you make profitable trades."
  }
]

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
      >
        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function InteractiveFAQ() {
  return (
    <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Vortex Group's trading infrastructure
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </Section>
  )
} 