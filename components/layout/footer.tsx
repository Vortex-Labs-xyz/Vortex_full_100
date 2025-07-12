"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { footerSections, socialLinks } from "@/lib/constants/footerLinks"
import { SocialIcon } from "@/components/ui/SocialIcon"
import { useAnalytics } from "@/hooks/useAnalytics"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { trackNavigation, trackSocialClick } = useAnalytics()

  const handleFooterLinkClick = (linkName: string) => {
    trackNavigation(linkName, "footer")
  }

  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform, "click", "footer")
  }

  return (
    <footer className="relative border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-gray-900/30" />
      
      <div className="relative">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            
            {/* Logo section - simplified */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block">
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/favicon-32x32.png"
                    alt="Vortex Group Logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <span className="text-base font-bold text-gray-900 dark:text-white">
                    Vortex Group
                  </span>
                </motion.div>
              </Link>
            </div>
            
            {/* Navigation columns with separators */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="space-y-3">
                {/* Column separator for desktop */}
                {index > 0 && (
                  <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-800" 
                       style={{ left: `${(index + 1) * 20}%` }} />
                )}
                
                <h3 className="text-xs font-medium uppercase tracking-wider text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => handleFooterLinkClick(link.name)}
                        className="text-xs text-gray-600 transition-all duration-200 ease-in-out hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                        aria-label={`Navigate to ${link.name}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Divider */}
          <div className="mt-6 border-t border-gray-200 dark:border-gray-800" />
          
          {/* Bottom bar - compact */}
          <div className="mt-4 flex flex-col items-center justify-between space-y-3 sm:flex-row sm:space-y-0">
            {/* Copyright */}
            <div className="text-center text-xs text-gray-600 dark:text-gray-400 sm:text-left">
              © {currentYear} VORTEX GROUP // ALPHA GENERATION SYSTEMS
            </div>
            
            {/* Social icons and status */}
            <div className="flex items-center space-x-4">
              {/* Social icons */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => (
                  <SocialIcon
                    key={social.name}
                    name={social.name}
                    href={social.href}
                    icon={social.icon}
                    onClick={() => handleSocialClick(social.name)}
                  />
                ))}
              </div>
              
              {/* Status indicator with Framer Motion */}
              <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                <motion.div 
                  className="h-2 w-2 rounded-full bg-green-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 