"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const activeLang = pathname.startsWith("/de") ? "DE" : "EN"

  const languages = [
    {
      code: "EN",
      getHref: () => (pathname.startsWith("/de") ? pathname.replace("/de", "") || "/" : pathname),
    },
    {
      code: "DE",
      getHref: () => (pathname.startsWith("/de") ? pathname : `/de${pathname}`),
    },
  ]

  return (
    <div className="relative flex items-center rounded-full border border-gray-200 bg-gray-50 p-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      {/* Active indicator */}
      <div 
        className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-in-out"
        style={{
          transform: activeLang === "DE" ? "translateX(calc(100% + 8px))" : "translateX(0)",
        }}
      />
      
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={lang.getHref()}
          scroll={false}
          className={`relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/20 ${
            activeLang === lang.code 
              ? "text-[#111]" 
              : "text-[#4a4a4a] hover:text-[#111]"
          }`}
        >
          {lang.code}
        </Link>
      ))}
    </div>
  )
}
