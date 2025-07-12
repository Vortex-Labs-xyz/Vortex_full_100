# Google Analytics 4 Implementation Documentation

## Overview

This document describes the complete Google Analytics 4 (GA4) implementation for the Vortex Group website. The implementation includes GDPR-compliant cookie consent management, comprehensive event tracking, and performance monitoring.

## Implementation Details

### GA4 Configuration
- **Measurement ID**: `G-PB1NV6K8B4`
- **Stream ID**: 11344802119 (for reference)
- **Website URL**: https://www.vortexgroup.xyz

### Key Features
- ✅ GDPR-compliant cookie consent banner
- ✅ Non-custodial event tracking (only with user consent)
- ✅ Comprehensive user interaction tracking
- ✅ Page view tracking with Next.js App Router
- ✅ Custom Vortex-specific events
- ✅ Social media interaction tracking

## File Structure

```
components/
├── GoogleAnalytics.tsx          # GA4 script loading and consent management
├── CookieConsent.tsx            # GDPR-compliant consent banner
├── AnalyticsProvider.tsx        # Provider that combines GA4 + consent
└── ui/SocialIcon.tsx           # Enhanced with click tracking

lib/
└── analytics.ts                # Event tracking utility functions

hooks/
└── useAnalytics.ts             # React hook for event tracking with consent checking

app/
└── layout.tsx                  # Analytics integration in root layout
```

## Events Being Tracked

### Standard Events

#### Navigation Events
- **Event Name**: `navigation_click`
- **Parameters**:
  - `nav_item`: Name of navigation item clicked
  - `nav_location`: Location (desktop_header, mobile_header, footer)
- **Triggered**: When users click navigation links in header or footer

#### Button Click Events
- **Event Name**: `button_click`
- **Parameters**:
  - `button_name`: Text/name of the button
  - `button_location`: Section where button is located
  - `additional_data`: Any extra context (optional)
- **Triggered**: When users click buttons throughout the site

#### Link Click Events
- **Event Name**: `link_click`
- **Parameters**:
  - `link_text`: Text of the link
  - `link_url`: Destination URL
  - `link_location`: Section where link is located
- **Triggered**: When users click external links

#### Form Events
- **Event Name**: `form_submit` / `form_start`
- **Parameters**:
  - `form_name`: Name/identifier of the form
  - `form_type`: Type of form (newsletter, contact, etc.)
- **Triggered**: When users interact with forms

### Custom Vortex Events

#### CTA Tracking
- **Event Name**: `cta_click`
- **Parameters**:
  - `cta_text`: Text of the CTA button
  - `cta_location`: Section (hero_section, product_page, etc.)
  - `cta_type`: Type of CTA (button, link, etc.)
- **Triggered**: When users click Call-to-Action buttons

#### Product Interactions
- **Event Name**: `view_item` / `select_item`
- **Parameters**:
  - `item_name`: Product name (e.g., "Rust Rocket Bot")
  - `item_category`: Always "trading_tools"
  - `currency`: "SOL"
  - `click_location`: Where the interaction occurred
- **Triggered**: When users view or click on products

#### Telegram Bot Access
- **Event Name**: `telegram_bot_access`
- **Parameters**:
  - `bot_name`: Name of the bot (default: "Rust Rocket")
  - `platform`: Always "telegram"
- **Triggered**: When users click links to access Telegram bots

#### Trading Feature Interactions
- **Event Name**: `trading_feature_interaction`
- **Parameters**:
  - `feature_name`: Name of the trading feature
  - `action_type`: Type of action performed
  - `product_category`: Always "trading_tools"
- **Triggered**: When users interact with trading-specific features

#### Social Media Interactions
- **Event Name**: `social_interaction`
- **Parameters**:
  - `platform`: Social platform name (Twitter, Telegram, etc.)
  - `action`: Action performed (click, follow, etc.)
  - `location`: Where the interaction occurred (footer, header, etc.)
- **Triggered**: When users click social media links

#### Demo Requests
- **Event Name**: `demo_request`
- **Parameters**:
  - `product_name`: Name of product for demo
  - `request_type`: Always "demo"
- **Triggered**: When users request product demos

#### Newsletter Signups
- **Event Name**: `newsletter_signup`
- **Parameters**:
  - `signup_location`: Where the signup occurred
- **Triggered**: When users sign up for newsletters

## GDPR Compliance

### Cookie Consent Management
The implementation follows strict GDPR guidelines:

1. **Explicit Consent Required**: GA4 scripts only load after user explicitly accepts analytics cookies
2. **Granular Control**: Users can accept/reject different cookie categories
3. **Persistent Preferences**: Consent choices are stored in localStorage
4. **Easy Withdrawal**: Users can change preferences at any time
5. **Transparent Information**: Clear explanation of what data is collected

### Data Collection
- **IP Anonymization**: Enabled by default (`anonymize_ip: true`)
- **Google Signals**: Only enabled with user consent
- **Ad Personalization**: Disabled (`allow_ad_personalization_signals: false`)
- **Ad Storage**: Always denied (we don't use advertising features)

### Storage Keys
- `vortex-cookie-consent`: Main consent status (true/false)
- `vortex-cookie-preferences`: Detailed preference object

## Usage Examples

### Using the Analytics Hook

```tsx
import { useAnalytics } from '@/hooks/useAnalytics'

function MyComponent() {
  const { trackButtonClick, trackCTAClick, hasConsent } = useAnalytics()

  const handleClick = () => {
    trackCTAClick("Get Started", "hero_section", "primary")
  }

  return (
    <button onClick={handleClick}>
      Get Started
    </button>
  )
}
```

### Direct Event Tracking

```tsx
import { trackEvent, trackProductView } from '@/lib/analytics'

// Custom event
trackEvent('custom_interaction', {
  interaction_type: 'hover',
  element_id: 'pricing_card',
  duration: 2.5
})

// Product view
trackProductView('Rust Rocket Bot', 'trading_tools')
```

### Tracking Page Views in App Router

```tsx
import { useEffect } from 'react'
import { trackPageView } from '@/lib/analytics'

export default function MyPage() {
  useEffect(() => {
    trackPageView(window.location.pathname, 'My Page Title')
  }, [])

  return <div>Page content</div>
}
```

## Integration Points

### Currently Tracked Locations

1. **Header Navigation** (components/layout/header.tsx)
   - Desktop and mobile navigation clicks
   - Logo clicks

2. **Footer Links** (components/layout/footer.tsx)
   - All footer navigation
   - Social media icons

3. **Hero Section** (components/sections/hero-section.tsx)
   - Main CTA button ("Start Trading Now")
   - Secondary action ("Learn More")

4. **Social Icons** (components/ui/SocialIcon.tsx)
   - All social media link clicks

### Recommended Additional Tracking

1. **Product Pages**: Add product view and interaction tracking
2. **Blog Posts**: Track reading time and engagement
3. **Forms**: Implement form start/complete tracking
4. **Search**: Add search functionality tracking
5. **Error Pages**: Track 404 and error occurrences

## GA4 Dashboard Setup

### Recommended Custom Events to Monitor

1. **Conversions**:
   - `telegram_bot_access` (primary conversion)
   - `demo_request`
   - `newsletter_signup`

2. **Engagement**:
   - `cta_click` by location
   - `navigation_click` patterns
   - `social_interaction` by platform

3. **Product Performance**:
   - `view_item` by product
   - `trading_feature_interaction`

### Custom Dimensions to Create

1. **User Engagement Level**: Based on number of tracked interactions
2. **Primary Interest**: Based on most viewed product category
3. **Referral Source Detail**: Enhanced referrer tracking
4. **Device Category**: Mobile vs Desktop behavior patterns

## Troubleshooting

### Common Issues

1. **Events Not Appearing**: Check if user has given consent
2. **Duplicate Events**: Ensure onClick handlers aren't duplicated
3. **Missing Parameters**: Verify all required parameters are passed

### Debugging

1. **Browser Console**: Check for GA4 debug messages
2. **GA4 DebugView**: Enable debug mode in GA4 dashboard
3. **Network Tab**: Verify gtag calls are being made

### Testing

```javascript
// Check if GA4 is loaded
console.log(window.gtag ? 'GA4 Loaded' : 'GA4 Not Loaded')

// Check consent status
console.log(localStorage.getItem('vortex-cookie-consent'))

// Send test event
window.gtag('event', 'test_event', { test_parameter: 'test_value' })
```

## Security Considerations

1. **Data Minimization**: Only track necessary user interactions
2. **No PII**: Ensure no personally identifiable information is tracked
3. **Consent First**: All tracking respects user consent choices
4. **Secure Transmission**: All data sent over HTTPS
5. **Regular Audits**: Periodically review tracked events for compliance

## Future Enhancements

1. **Enhanced E-commerce Tracking**: For future product sales
2. **Custom User Properties**: For better user segmentation
3. **Server-Side Tracking**: For improved data accuracy
4. **A/B Testing Integration**: For conversion optimization
5. **Real-Time Alerts**: For critical business events

---

**Last Updated**: December 2024  
**Implementation Version**: 1.0  
**Next Review**: January 2025 