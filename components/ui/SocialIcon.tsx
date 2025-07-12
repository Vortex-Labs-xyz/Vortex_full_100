"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, MessageCircle, LucideIcon } from "lucide-react"

interface SocialIconProps {
  name: string
  href: string
  icon: string
  onClick?: () => void
}

const iconMap: Record<string, LucideIcon> = {
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
}

export function SocialIcon({ name, href, icon, onClick }: SocialIconProps) {
  const Icon = iconMap[icon]

  if (!Icon) return null

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex h-8 w-8 items-center justify-center rounded-md text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      whileHover={{ scale: 1.1, opacity: 0.8 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-label={`Follow us on ${name}`}
    >
      <Icon className="h-4 w-4" />
    </motion.a>
  )
} 