"use client"

import { useState, useEffect } from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import CookieConsent from './CookieConsent'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [hasConsent, setHasConsent] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem('vortex-cookie-consent')
    if (savedConsent) {
      setHasConsent(savedConsent === 'true')
    }
    setIsLoaded(true)
  }, [])

  const handleConsentChange = (consent: boolean) => {
    setHasConsent(consent)
  }

  // Don't render anything until we've checked localStorage to prevent hydration mismatch
  if (!isLoaded) {
    return <>{children}</>
  }

  return (
    <>
      {children}
      <GoogleAnalytics hasConsent={hasConsent} />
      <CookieConsent onConsentChange={handleConsentChange} />
    </>
  )
} 