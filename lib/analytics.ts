import { GA_MEASUREMENT_ID } from '@/components/GoogleAnalytics'

// Event tracking utility functions for Google Analytics 4

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Generic event tracking function
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
    })
  }
}

// Page view tracking
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    })
  }
}

// Button click tracking
export const trackButtonClick = (buttonName: string, buttonLocation?: string, additionalData?: Record<string, any>) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalData,
  })
}

// Link click tracking
export const trackLinkClick = (linkText: string, linkUrl: string, linkLocation?: string) => {
  trackEvent('link_click', {
    link_text: linkText,
    link_url: linkUrl,
    link_location: linkLocation,
  })
}

// Form interaction tracking
export const trackFormSubmit = (formName: string, formType?: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    form_type: formType,
  })
}

export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    form_name: formName,
  })
}

// CTA (Call-to-Action) tracking
export const trackCTAClick = (ctaText: string, ctaLocation: string, ctaType?: string) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    cta_type: ctaType || 'button',
  })
}

// Navigation tracking
export const trackNavigation = (navItem: string, navLocation: string) => {
  trackEvent('navigation_click', {
    nav_item: navItem,
    nav_location: navLocation,
  })
}

// Download tracking
export const trackDownload = (fileName: string, fileType?: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  })
}

// Search tracking
export const trackSearch = (searchTerm: string, searchLocation?: string) => {
  trackEvent('search', {
    search_term: searchTerm,
    search_location: searchLocation,
  })
}

// Video interaction tracking
export const trackVideoPlay = (videoTitle: string, videoLocation?: string) => {
  trackEvent('video_play', {
    video_title: videoTitle,
    video_location: videoLocation,
  })
}

// Product interaction tracking (for Vortex trading products)
export const trackProductView = (productName: string, productCategory?: string) => {
  trackEvent('view_item', {
    item_name: productName,
    item_category: productCategory || 'trading_tools',
    currency: 'SOL',
  })
}

export const trackProductClick = (productName: string, productCategory?: string, clickLocation?: string) => {
  trackEvent('select_item', {
    item_name: productName,
    item_category: productCategory || 'trading_tools',
    click_location: clickLocation,
  })
}

// Newsletter signup tracking
export const trackNewsletterSignup = (signupLocation: string) => {
  trackEvent('newsletter_signup', {
    signup_location: signupLocation,
  })
}

// Social media interaction tracking
export const trackSocialClick = (platform: string, action: string, location?: string) => {
  trackEvent('social_interaction', {
    platform: platform,
    action: action,
    location: location,
  })
}

// Error tracking
export const trackError = (errorMessage: string, errorLocation?: string) => {
  trackEvent('exception', {
    description: errorMessage,
    error_location: errorLocation,
    fatal: false,
  })
}

// Custom Vortex-specific events
export const trackTelegramBotAccess = (botName: string = 'Rust Rocket') => {
  trackEvent('telegram_bot_access', {
    bot_name: botName,
    platform: 'telegram',
  })
}

export const trackTradingFeatureInteraction = (featureName: string, actionType: string) => {
  trackEvent('trading_feature_interaction', {
    feature_name: featureName,
    action_type: actionType,
    product_category: 'trading_tools',
  })
}

export const trackDemoRequest = (productName: string) => {
  trackEvent('demo_request', {
    product_name: productName,
    request_type: 'demo',
  })
}

// Hook for tracking page views in Next.js App Router
export const usePageTracking = () => {
  const trackCurrentPage = () => {
    if (typeof window !== 'undefined') {
      trackPageView(window.location.pathname, document.title)
    }
  }

  return { trackCurrentPage }
} 