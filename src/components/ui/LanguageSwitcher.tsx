import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageOption {
  locale: string;
  name: string;
  direction: 'ltr' | 'rtl';
  icon: React.ReactNode;
}

const languageOptions: LanguageOption[] = [
  {
    locale: 'sv',
    name: 'Svenska',
    direction: 'ltr',
    icon: (
      <svg viewBox="0 0 640 480" className="w-5 h-3">
        <path fill="#006aa7" d="M0 0h640v480H0z"/>
        <path fill="#fecc00" d="M0 192h640v96H0z"/>
        <path fill="#fecc00" d="M176 0h96v480h-96z"/>
      </svg>
    )
  },
  {
    locale: 'ar',
    name: 'العربية',
    direction: 'rtl',
    icon: (
      <svg viewBox="0 0 640 480" className="w-5 h-3">
        <path d="M0 0h640v160H0z" fill="#078930"/>
        <path d="M0 160h640v160H0z" fill="#fff"/>
        <path d="M0 320h640v160H0z" fill="#000"/>
        <path d="M0 0h220v480H0z" fill="#bf0029"/>
      </svg>
    )
  }
];

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentLanguage = languageOptions.find(option => option.locale === router.locale) || languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const setLanguage = (locale: string) => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center space-x-1 p-1.5 rounded-full transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="flex items-center justify-center">{currentLanguage.icon}</span>
        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-elegant-lg py-2 z-50"
            role="listbox"
          >
            {languageOptions.map((option) => (
              <Link
                key={option.locale}
                href={router.asPath}
                locale={option.locale}
                onClick={() => setLanguage(option.locale)}
                className={`flex items-center px-4 py-2 text-sm ${
                  router.locale === option.locale
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                role="option"
                aria-selected={router.locale === option.locale}
              >
                <span className="flex items-center justify-center mr-2">{option.icon}</span>
                <span>{option.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;