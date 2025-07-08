"use client"

import { User, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const VortexLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2 text-text"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="currentColor"
    />
    <path
      d="M12 12.5c-1.1 0-2.1.4-2.83 1.17l1.41 1.41c.39-.39.9-.68 1.42-.68s1.03.29 1.42.68l1.41-1.41C14.1 12.9 13.1 12.5 12 12.5zM12 7.5c-2.76 0-5 2.24-5 5h2c0-1.65 1.35-3 3-3s3 1.35 3 3h2c0-2.76-2.24-5-5-5z"
      fill="currentColor"
    />
  </svg>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItemClass = "text-sm font-medium text-text hover:text-accent transition-colors"

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-bg/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-container h-20">
          <Link href="/" className="flex items-center font-bold text-lg text-text">
            <VortexLogo />
            Vortex
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/blog" className={navItemClass}>
              Blog
            </Link>
            <a href="#" className={navItemClass}>
              Karriere
            </a>
            <a href="#" className={navItemClass}>
              <User className="h-5 w-5" />
            </a>
            <div className="h-5 w-px bg-border" />
            <ThemeToggle />
            <LanguageSwitcher />
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 -mr-2 text-text hover:text-accent transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div 
        className={`fixed top-20 right-0 bottom-0 w-64 bg-bg border-l border-border z-25 md:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <Link href="/blog" className="text-text font-medium hover:text-accent transition-colors">
            Blog
          </Link>
          <a href="#" className="text-text font-medium hover:text-accent transition-colors">
            Karriere
          </a>
          <a href="#" className="text-text font-medium hover:text-accent transition-colors flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile
          </a>
          <div className="border-t border-border pt-6">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  )
}
