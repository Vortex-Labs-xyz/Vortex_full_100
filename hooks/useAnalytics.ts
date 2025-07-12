"use client"

import { useCallback } from 'react'
import * as analytics from '@/lib/analytics'

// Hook that provides analytics tracking functions with consent checking
export const useAnalytics = () => {
  // Check if user has given consent before tracking
  const hasConsent = useCallback(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('vortex-cookie-consent') === 'true'
  }, [])

  // Wrapper functions that check consent before tracking
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (hasConsent()) {
      analytics.trackEvent(eventName, parameters)
    }
  }, [hasConsent])

  const trackPageView = useCallback((pagePath: string, pageTitle?: string) => {
    if (hasConsent()) {
      analytics.trackPageView(pagePath, pageTitle)
    }
  }, [hasConsent])

  const trackButtonClick = useCallback((buttonName: string, buttonLocation?: string, additionalData?: Record<string, any>) => {
    if (hasConsent()) {
      analytics.trackButtonClick(buttonName, buttonLocation, additionalData)
    }
  }, [hasConsent])

  const trackLinkClick = useCallback((linkText: string, linkUrl: string, linkLocation?: string) => {
    if (hasConsent()) {
      analytics.trackLinkClick(linkText, linkUrl, linkLocation)
    }
  }, [hasConsent])

  const trackFormSubmit = useCallback((formName: string, formType?: string) => {
    if (hasConsent()) {
      analytics.trackFormSubmit(formName, formType)
    }
  }, [hasConsent])

  const trackFormStart = useCallback((formName: string) => {
    if (hasConsent()) {
      analytics.trackFormStart(formName)
    }
  }, [hasConsent])

  const trackCTAClick = useCallback((ctaText: string, ctaLocation: string, ctaType?: string) => {
    if (hasConsent()) {
      analytics.trackCTAClick(ctaText, ctaLocation, ctaType)
    }
  }, [hasConsent])

  const trackNavigation = useCallback((navItem: string, navLocation: string) => {
    if (hasConsent()) {
      analytics.trackNavigation(navItem, navLocation)
    }
  }, [hasConsent])

  const trackProductView = useCallback((productName: string, productCategory?: string) => {
    if (hasConsent()) {
      analytics.trackProductView(productName, productCategory)
    }
  }, [hasConsent])

  const trackProductClick = useCallback((productName: string, productCategory?: string, clickLocation?: string) => {
    if (hasConsent()) {
      analytics.trackProductClick(productName, productCategory, clickLocation)
    }
  }, [hasConsent])

  const trackTelegramBotAccess = useCallback((botName?: string) => {
    if (hasConsent()) {
      analytics.trackTelegramBotAccess(botName)
    }
  }, [hasConsent])

  const trackTradingFeatureInteraction = useCallback((featureName: string, actionType: string) => {
    if (hasConsent()) {
      analytics.trackTradingFeatureInteraction(featureName, actionType)
    }
  }, [hasConsent])

  const trackDemoRequest = useCallback((productName: string) => {
    if (hasConsent()) {
      analytics.trackDemoRequest(productName)
    }
  }, [hasConsent])

  const trackSocialClick = useCallback((platform: string, action: string, location?: string) => {
    if (hasConsent()) {
      analytics.trackSocialClick(platform, action, location)
    }
  }, [hasConsent])

  const trackNewsletterSignup = useCallback((signupLocation: string) => {
    if (hasConsent()) {
      analytics.trackNewsletterSignup(signupLocation)
    }
  }, [hasConsent])

  const trackError = useCallback((errorMessage: string, errorLocation?: string) => {
    if (hasConsent()) {
      analytics.trackError(errorMessage, errorLocation)
    }
  }, [hasConsent])

  return {
    hasConsent: hasConsent(),
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackLinkClick,
    trackFormSubmit,
    trackFormStart,
    trackCTAClick,
    trackNavigation,
    trackProductView,
    trackProductClick,
    trackTelegramBotAccess,
    trackTradingFeatureInteraction,
    trackDemoRequest,
    trackSocialClick,
    trackNewsletterSignup,
    trackError,
  }
} 