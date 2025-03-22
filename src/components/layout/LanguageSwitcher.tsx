// This component is no longer needed as we're using Swedish only.
// Empty placeholder component to avoid breaking imports.

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, changeLanguage, isRTL } = useLanguage();
  const [googleTranslateLoaded, setGoogleTranslateLoaded] = useState(false);
  const [translationInProgress, setTranslationInProgress] = useState(false);

  const languages = [
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Find current language display
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  // Initialize Google Translate API
  useEffect(() => {
    // Check if this is a reload after language change to prevent loops
    const languageChanged = sessionStorage.getItem('languageChanged');
    if (languageChanged) {
      // Clear the flag so future manual changes will work
      sessionStorage.removeItem('languageChanged');
      console.log('Detected reload after language change');
    }

    // Create a new div to hold the Google Translate widget
    const createGoogleTranslateElement = () => {
      // Remove any existing elements
      const existingElement = document.getElementById('google_translate_element');
      if (existingElement) {
        existingElement.innerHTML = '';
      } else {
        const div = document.createElement('div');
        div.id = 'google_translate_element';
        div.style.position = 'absolute';
        div.style.top = '-9999px';
        div.style.left = '-9999px';
        document.body.appendChild(div);
      }
    };

    // Create the element
    createGoogleTranslateElement();

    // Helper to hide Google Translate UI elements
    const hideGoogleTranslateUI = () => {
      // Hide the banner iframe that sometimes appears
      const bannerFrames = document.querySelectorAll('.goog-te-banner-frame, .skiptranslate');
      bannerFrames.forEach(frame => {
        if (frame instanceof HTMLElement) {
          frame.style.display = 'none';
        }
      });

      // Make sure body is not shifted
      document.body.style.top = '0px'; 
      
      // Fix any visibility issues with the rest of the site
      document.body.classList.remove('overflow-hidden');
    };

    // Call this function immediately and also set up an interval
    hideGoogleTranslateUI();
    
    // Keep checking for Google elements that might appear later
    const hideInterval = setInterval(hideGoogleTranslateUI, 300);
    setTimeout(() => clearInterval(hideInterval), 5000); // Clear after 5 seconds

    // Check for existing translation from cookies
    const checkExistingTranslation = () => {
      const cookieTranslation = document.cookie
        .split('; ')
        .find((row) => row.startsWith('googtrans='))
        ?.split('=')[1];
        
      if (cookieTranslation) {
        console.log('Found existing translation cookie:', cookieTranslation);
        const langCode = cookieTranslation.split('/').pop();
        if (langCode && langCode !== 'sv') {
          // Update our context to match the cookie
          setTimeout(() => {
            changeLanguage(langCode as string);
          }, 500);
        }
      }
    };
    
    checkExistingTranslation();

    // Define the global callback function
    window.googleTranslateElementInit = () => {
      console.log('Google Translate initialization called');
      const translateElement = new window.google.translate.TranslateElement({
        pageLanguage: 'sv',
        includedLanguages: 'sv,da,ar',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: true
      }, 'google_translate_element');
      
      setGoogleTranslateLoaded(true);
      console.log('Google Translate initialized');
      
      // Final check after Google Translate has initialized
      setTimeout(hideGoogleTranslateUI, 1000);
    };

    // Add Google Translate script if not already present
    const addScript = () => {
      if (document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
        console.log('Google Translate script already exists');
        if (window.google && window.google.translate) {
          console.log('Google Translate object already loaded');
          setGoogleTranslateLoaded(true);
        }
        return null;
      }
      
      console.log('Adding Google Translate script');
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      
      return script;
    };

    const script = addScript();

    // Cleanup function
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      clearInterval(hideInterval);
    };
  }, [language, changeLanguage]);

  // Function to force language change by directly manipulating the select element
  const forceLanguageChange = (langCode: string) => {
    try {
      // Method 1: Try to set cookies directly (most reliable)
      setCookieApproach(langCode);
      
      // Method 2: Find the Google Translate select element
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      
      if (selectElement) {
        console.log('Found Google Translate select element, setting to', langCode);
        
        // Directly set the value
        selectElement.value = langCode;
        
        // Trigger change events
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        
        // Try to find and click the appropriate option
        const options = selectElement.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === langCode) {
            options[i].selected = true;
            break;
          }
        }
        
        // Try direct click
        selectElement.click();
        
        // As a last resort, try to directly inject the translate code
        if (window.google && window.google.translate) {
          console.log('Calling Google Translate API directly');
          const translateElement = document.getElementById('google_translate_element');
          if (translateElement) {
            // Clear and re-initialize
            translateElement.innerHTML = '';
            new window.google.translate.TranslateElement({
              pageLanguage: 'sv',
              includedLanguages: 'sv,da,ar',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
            
            // Wait a brief moment and then try again
            setTimeout(() => {
              const newSelectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
              if (newSelectElement) {
                newSelectElement.value = langCode;
                newSelectElement.dispatchEvent(new Event('change', { bubbles: true }));
              }
            }, 500);
          }
        }
        
        return true;
      } else {
        console.warn('Google Translate select element not found');
        return false;
      }
    } catch (error) {
      console.error('Error forcing language change:', error);
      return false;
    }
  };

  // More direct approach using cookies
  const setCookieApproach = (langCode: string) => {
    try {
      // Check if we're already on the correct language to prevent refresh loops
      const currentCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('googtrans='))
        ?.split('=')[1];
      
      // Extract current language from cookie
      const currentLang = currentCookie?.split('/').pop();
      
      // If we're already on the correct language, don't reload
      if (currentLang === langCode || (currentLang === undefined && langCode === 'sv')) {
        console.log('Already using the selected language, no reload needed');
        return true;
      }
      
      // Map our codes to Google's language codes
      const googleLangMap: Record<string, string> = {
        'sv': '', // Empty for Swedish (original language)
        'da': 'da', 
        'ar': 'ar'
      };
      
      const googleLang = googleLangMap[langCode] || '';
      
      if (langCode === 'sv') {
        // For original language, we need to remove the cookie
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;
        
        // Add flag to prevent reload loops
        sessionStorage.setItem('languageChanged', 'true');
        
        // Force a page reload to ensure translation is reset
        console.log('Reloading to reset to original language');
        window.location.reload();
      } else {
        // For other languages, set the appropriate cookie
        const domain = window.location.hostname;
        
        // Set cookies at both domain levels (sometimes required)
        document.cookie = `googtrans=/sv/${googleLang}; path=/;`;
        document.cookie = `googtrans=/sv/${googleLang}; path=/; domain=${domain}`;
        document.cookie = `googtrans=/sv/${googleLang}; path=/; domain=.${domain}`;
        
        // Add flag to prevent reload loops
        sessionStorage.setItem('languageChanged', 'true');
        
        // Force page refresh for translation to take effect
        console.log('Reloading page to apply translation');
        window.location.reload();
      }
      
      console.log('Cookie approach attempted for', langCode);
      return true;
    } catch (error) {
      console.error('Error setting cookies:', error);
      return false;
    }
  };

  // Change language function using Google Translate API
  const handleLanguageChange = (langCode: string) => {
    console.log('Changing language to:', langCode);
    
    // Update our context state first
    changeLanguage(langCode);
    setShowDropdown(false);
    setTranslationInProgress(true);
    
    // The most reliable approach is directly setting cookies and forcing a page reload
    setCookieApproach(langCode);
    
    // This ensures the UI updates even if reload doesn't happen immediately
    setTimeout(() => {
      setTranslationInProgress(false);
    }, 5000); // Timeout as a fallback
  };

  return (
    <div className={`relative ${isRTL ? 'md:ml-3' : 'md:mr-3'}`} ref={dropdownRef}>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element"></div>
      
      {/* Custom language switcher UI */}
      <button
        className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-blue-50 transition-colors w-full md:w-auto justify-center md:justify-start"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-expanded={showDropdown}
        aria-label="Byt språk"
        disabled={translationInProgress}
      >
        <span className="text-xl" aria-hidden="true">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-slate-700">{currentLanguage.name}</span>
        {translationInProgress ? (
          <svg className="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg 
            className={`w-4 h-4 text-slate-600 transition-transform ${showDropdown ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      
      {/* Dropdown */}
      {showDropdown && (
        <div className={`absolute ${isRTL ? 'md:left-0' : 'md:right-0'} top-full mt-1 w-full md:w-40 bg-white rounded-md shadow-lg z-50`}>
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-blue-50 transition-colors ${
                  language === lang.code ? 'bg-blue-50 font-medium text-blue-600' : 'text-slate-700'
                }`}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={translationInProgress}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
          {!googleTranslateLoaded && (
            <div className="px-4 py-2 text-xs text-orange-500">
              Loading translation service...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;