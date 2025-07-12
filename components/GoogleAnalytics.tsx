"use client"

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

const GA_MEASUREMENT_ID = 'G-PB1NV6K8B4'

interface GoogleAnalyticsProps {
  hasConsent: boolean
}

export default function GoogleAnalytics({ hasConsent }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      
      // Set initial consent state
      window.gtag('consent', 'default', {
        analytics_storage: hasConsent ? 'granted' : 'denied',
        ad_storage: 'denied', // We don't use ads, keep denied
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500,
      })
      
      // Configure GA4
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        anonymize_ip: true, // GDPR compliance
        allow_google_signals: hasConsent,
        allow_ad_personalization_signals: false,
      })
    }
  }, [hasConsent])

  // Update consent when it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: hasConsent ? 'granted' : 'denied',
      })
    }
  }, [hasConsent])

  // Don't load GA4 scripts if no consent
  if (!hasConsent) {
    return null
  }

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            allow_google_signals: ${hasConsent},
            allow_ad_personalization_signals: false,
          });
        `}
      </Script>
    </>
  )
}

// Export GA measurement ID for use in other components
export { GA_MEASUREMENT_ID } 