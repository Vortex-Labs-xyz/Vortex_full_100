"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings, Shield, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'

interface CookieConsentProps {
  onConsentChange: (hasConsent: boolean) => void
}

const CONSENT_STORAGE_KEY = 'vortex-cookie-consent'
const CONSENT_PREFERENCES_KEY = 'vortex-cookie-preferences'

interface ConsentPreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent({ onConsentChange }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY)
    const savedPreferences = localStorage.getItem(CONSENT_PREFERENCES_KEY)
    
    if (savedConsent) {
      const hasConsent = savedConsent === 'true'
      onConsentChange(hasConsent)
      
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences))
      }
    } else {
      // Show banner if no previous choice
      setShowBanner(true)
    }
  }, [onConsentChange])

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: false, // We don't use marketing cookies
    }
    
    saveConsentPreferences(newPreferences, true)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    
    saveConsentPreferences(newPreferences, false)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    const hasAnalyticsConsent = preferences.analytics
    saveConsentPreferences(preferences, hasAnalyticsConsent)
    setShowPreferences(false)
    setShowBanner(false)
  }

  const saveConsentPreferences = (prefs: ConsentPreferences, hasAnalyticsConsent: boolean) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, hasAnalyticsConsent.toString())
    localStorage.setItem(CONSENT_PREFERENCES_KEY, JSON.stringify(prefs))
    setPreferences(prefs)
    onConsentChange(hasAnalyticsConsent)
  }

  const handlePreferenceChange = (key: keyof ConsentPreferences, value: boolean) => {
    if (key === 'necessary') return // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <>
      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="mx-auto max-w-6xl">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-accent" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            We value your privacy
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            We use cookies to enhance your browsing experience and analyze our traffic. 
                            By clicking "Accept All", you consent to our use of cookies for analytics. 
                            Essential cookies are always active to ensure proper website functionality.
                          </p>
                          <button
                            onClick={() => setShowPreferences(true)}
                            className="text-accent hover:text-accent/80 text-sm font-medium mt-2 transition-colors"
                          >
                            Customize preferences
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                      <Button
                        variant="outline"
                        onClick={handleRejectAll}
                        className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        Reject All
                      </Button>
                      <Button
                        onClick={handleAcceptAll}
                        className="bg-accent hover:bg-accent/90 text-white"
                      >
                        Accept All
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Preferences Modal */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-accent" />
              Cookie Preferences
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Choose which cookies you want to allow. You can change these settings at any time.
            </p>
            
            {/* Necessary Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Necessary Cookies
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Essential for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <Switch
                  checked={preferences.necessary}
                  disabled={true}
                  className="opacity-50"
                />
              </div>
              
              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Analytics Cookies
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Help us understand how visitors interact with our website by collecting anonymous information.
                  </p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                onClick={() => setShowPreferences(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 