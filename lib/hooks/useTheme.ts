"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check localStorage and system preference
    const stored = localStorage.getItem("theme") as Theme | null
    const systemPreference = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
    
    const initialTheme = stored || systemPreference
    setTheme(initialTheme)
    document.documentElement.setAttribute("data-theme", initialTheme)
    
    // Remove default dark class if light theme
    if (initialTheme === "light") {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    
    if (newTheme === "light") {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return { theme, toggleTheme, mounted }
}

// Script to inject in head to prevent flash
export const themeScript = `
  (function() {
    const stored = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const theme = stored || systemPreference;
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  })();
` 