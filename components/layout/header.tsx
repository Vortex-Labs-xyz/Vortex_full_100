"use client"

import { User, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const VortexLogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-text"
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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItemClass = "px-4 py-2 text-sm font-medium text-[#111] hover:text-accent transition-all duration-150 ease-in-out rounded-full hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20"

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-30 flex justify-center">
        <div className="bg-white rounded-[32px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 backdrop-blur-lg">
          <div className="flex items-center justify-between px-6 py-3 min-h-[60px] max-w-6xl">
            
            {/* Logo - Center aligned */}
            <Link 
              href="/" 
              className="flex items-center font-bold text-lg text-[#111] hover:scale-105 transition-transform duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20 rounded-full px-2 py-1"
            >
            <VortexLogo />
              <span className="ml-2">Vortex</span>
            </Link>

            {/* Navigation - Right aligned */}
            <nav className="hidden md:flex items-center gap-2">
              <Link href="/blog" className={navItemClass}>
              Blog
              </Link>
            <a href="#" className={navItemClass}>
                Careers
            </a>
              
              {/* Profile button - Circular */}
              <button 
                className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 text-[#111] hover:text-accent transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20 flex items-center justify-center ml-2"
                aria-label="Profile"
              >
              <User className="h-5 w-5" />
              </button>
              
              {/* Separator */}
              <div className="h-6 w-px bg-gray-200 mx-2" />
              
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>

            {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 text-[#111] hover:text-accent transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20 flex items-center justify-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>
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
        className={`fixed top-20 right-4 w-72 bg-white rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 z-25 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-[-10px] opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="p-6 flex flex-col gap-3">
          <Link 
            href="/blog" 
            className="text-[#111] font-medium hover:text-accent transition-all duration-150 ease-in-out rounded-full px-4 py-3 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20"
          >
            Blog
          </Link>
          <a 
            href="#" 
            className="text-[#111] font-medium hover:text-accent transition-all duration-150 ease-in-out rounded-full px-4 py-3 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20"
          >
            Careers
          </a>
          <button 
            className="text-[#111] font-medium hover:text-accent transition-all duration-150 ease-in-out rounded-full px-4 py-3 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20 flex items-center gap-3 text-left"
          >
            <User className="h-5 w-5" />
            Profile
          </button>
          
          <div className="border-t border-gray-100 pt-4 mt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#4a4a4a]">Theme & Language</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <ThemeToggle />
            <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
