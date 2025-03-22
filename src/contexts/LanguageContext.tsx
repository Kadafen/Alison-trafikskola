import React, { createContext, useContext, useEffect, ReactNode, useState } from 'react';

// Default language is Swedish
const DEFAULT_LANGUAGE = 'sv';

// Declare Google Translate global types
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (options: any, element: string): any;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

type LanguageContextType = {
  language: string;
  isRTL: boolean;
  translateImmediate: (text: string) => string;
  changeLanguage: (langCode: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  isRTL: false,
  translateImmediate: (text) => text,
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // State for the current language
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  
  // Determine if the language is RTL (only Arabic in our case)
  const isRTL = language === 'ar';
  
  // Simple immediate translation function that just returns the original text
  // This could be enhanced with a more sophisticated translation system if needed
  const translateImmediate = (text: string): string => {
    return text;
  };
  
  // Function to change the language
  const changeLanguage = (langCode: string): void => {
    setLanguage(langCode);
  };
  
  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);
  
  const contextValue = {
    language,
    isRTL,
    translateImmediate,
    changeLanguage,
  };
  
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}

// Simple component for text (no longer does translation, just renders children)
export function T({ children }: { children: string }) {
  return <>{children}</>;
} 