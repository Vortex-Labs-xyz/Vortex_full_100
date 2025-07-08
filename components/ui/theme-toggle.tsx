"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/hooks/useTheme"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <button
        className={cn(
          "w-10 h-10 rounded-full bg-gray-50 text-[#4a4a4a] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-150 ease-in-out flex items-center justify-center",
          className
        )}
        aria-label="Toggle theme"
      >
        <div className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 text-[#111] hover:text-accent transition-all duration-150 ease-in-out hover:scale-105 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20 flex items-center justify-center",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  )
} 