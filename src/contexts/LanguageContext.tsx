import React, { createContext, useContext, useEffect, ReactNode } from 'react';

// Simplified version with hardcoded Swedish as the only language
const DEFAULT_LANGUAGE = 'sv';

type LanguageContextType = {
  language: string;
  isRTL: boolean;
  translateImmediate: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  isRTL: false,
  translateImmediate: (text) => text,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Always use Swedish
  const language = DEFAULT_LANGUAGE;
  
  // Always LTR for Swedish
  const isRTL = false;
  
  // Simple immediate translation function that just returns the original text
  const translateImmediate = (text: string): string => {
    return text;
  };
  
  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = language;
  }, [language]);
  
  const contextValue = {
    language,
    isRTL,
    translateImmediate,
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