import { useEffect, useState } from 'react';

// Cache to store already translated texts
const translationCache: Record<string, Record<string, string>> = {};

// Available languages for the selector
export const availableLanguages = [
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

// Default language
export const DEFAULT_LANGUAGE = 'sv';

/**
 * Translates text to the specified language
 * @param text - Text to translate
 * @param targetLang - Target language code
 * @param sourceLang - Source language code (defaults to English)
 * @returns Promise with translated text
 */
export async function translateText(
  text: string,
  targetLang: string,
  sourceLang: string = 'en'
): Promise<string> {
  // Don't translate if already in the target language
  if (targetLang === sourceLang) return text;
  
  // Return from cache if available
  if (translationCache[targetLang]?.[text]) {
    return translationCache[targetLang][text];
  }
  
  try {
    // Use Google Translate API
    const endpoint = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    
    const response = await fetch(endpoint);
    const data = await response.json();
    
    // Extract the translated text from the response
    const translatedText = data[0][0][0];
    
    // Store in cache
    if (!translationCache[targetLang]) {
      translationCache[targetLang] = {};
    }
    translationCache[targetLang][text] = translatedText;
    
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fall back to original text
  }
}

/**
 * React hook for Google Translate-based translation
 * @param text - Text to translate
 * @param language - Target language code
 * @returns Translated text and loading state
 */
export function useTranslation(text: string, language = DEFAULT_LANGUAGE) {
  const [translatedText, setTranslatedText] = useState(text);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Default to original text initially
    setTranslatedText(text);
    setIsLoading(true);
    
    // Skip translation if we're using the source language
    if (language === 'en') {
      setIsLoading(false);
      return;
    }
    
    // Check cache first
    if (translationCache[language]?.[text]) {
      setTranslatedText(translationCache[language][text]);
      setIsLoading(false);
      return;
    }
    
    // Translate the text
    translateText(text, language)
      .then(result => {
        setTranslatedText(result);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Translation error:', error);
        setIsLoading(false);
      });
  }, [text, language]);
  
  return { translatedText, isLoading };
}

/**
 * Create a language context for the app
 */
export function getLanguageFromPathname(pathname: string): string {
  // Extract language code from URL path if present
  const langMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
  return langMatch ? langMatch[1] : DEFAULT_LANGUAGE;
}

/**
 * Batch translate multiple texts at once (better performance)
 */
export async function batchTranslate(
  texts: string[],
  targetLang: string,
  sourceLang: string = 'en'
): Promise<string[]> {
  if (targetLang === sourceLang) return texts;
  
  // Filter out texts that are already in cache
  const textsToTranslate = texts.filter(
    text => !translationCache[targetLang]?.[text]
  );
  
  if (textsToTranslate.length === 0) {
    // All texts are in cache, return them
    return texts.map(text => translationCache[targetLang][text] || text);
  }
  
  try {
    // Join texts with a special separator that won't appear in normal text
    const separator = "¶¶¶¶¶";
    const combinedText = textsToTranslate.join(separator);
    
    const translatedCombined = await translateText(combinedText, targetLang, sourceLang);
    const translatedParts = translatedCombined.split(separator);
    
    // Update cache with new translations
    if (!translationCache[targetLang]) {
      translationCache[targetLang] = {};
    }
    
    textsToTranslate.forEach((original, i) => {
      translationCache[targetLang][original] = translatedParts[i] || original;
    });
    
    // Return all translations in the original order
    return texts.map(text => translationCache[targetLang][text] || text);
  } catch (error) {
    console.error('Batch translation error:', error);
    return texts; // Fall back to original texts
  }
} 