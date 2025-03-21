import React from 'react';
import i18n from 'i18next';

// Cache for translated values to avoid redundant API calls
const translationCache: Record<string, string> = {};

/**
 * Fallback handler for missing translation keys
 * Uses Google Translate API to translate the missing key's default value
 */
export const handleMissingKey = (key: string, defaultValue: string): string => {
  // If already in cache, return cached translation
  if (translationCache[key]) {
    return translationCache[key];
  }
  
  // If no default value is provided, use the key itself
  if (!defaultValue) {
    return key;
  }
  
  // For development, log missing keys to make them easy to identify
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Missing translation key: "${key}", using fallback`);
  }
  
  // Return the default value immediately while we fetch the translation
  setTimeout(() => {
    // Get current language
    const targetLang = i18n.language || 'sv';
    
    // Only translate if not already in the current language
    if (targetLang !== 'en') {
      translateText(defaultValue, 'en', targetLang)
        .then(translatedText => {
          // Store in cache
          translationCache[key] = translatedText;
          
          // Manually update any elements displaying this key
          // This is optional but provides a smoother UX
          document.querySelectorAll(`[data-i18n-key="${key}"]`).forEach(el => {
            el.textContent = translatedText;
          });
        })
        .catch(err => {
          console.error('Translation fallback error:', err);
        });
    }
  }, 0);
  
  return defaultValue;
};

/**
 * Translate text using Google Translate API
 */
async function translateText(
  text: string,
  sourceLang: string = 'en',
  targetLang: string = 'sv'
): Promise<string> {
  try {
    // For a production app, you would use your own Google Cloud Translation API key
    // This is a simplified example using a public API
    const endpoint = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    
    const response = await fetch(endpoint);
    const data = await response.json();
    
    // Extract the translated text from the response
    return data[0][0][0];
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text on error
  }
}

/**
 * Add data attributes to elements for easy updating when translations arrive
 */
export const withTranslationKey = (key: string, element: JSX.Element): JSX.Element => {
  return React.cloneElement(element, { 'data-i18n-key': key });
}; 