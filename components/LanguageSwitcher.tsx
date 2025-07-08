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
    <div className="relative flex items-center rounded-pill border border-border bg-bgSubtle p-1">
      {/* Active indicator */}
      <div 
        className="absolute inset-y-1 w-[calc(50%-4px)] rounded-pill bg-surface shadow-soft transition-transform duration-300"
        style={{
          transform: activeLang === "DE" ? "translateX(calc(100% + 8px))" : "translateX(0)",
        }}
      />
      
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={lang.getHref()}
          scroll={false}
          className={`relative z-10 rounded-pill px-3 py-1 text-xs font-medium transition-colors duration-300 ${
            activeLang === lang.code 
              ? "text-text" 
              : "text-textSub hover:text-text"
          }`}
        >
          {lang.code}
        </Link>
      ))}
    </div>
  )
}
