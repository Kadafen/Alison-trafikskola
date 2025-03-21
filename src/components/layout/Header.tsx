import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import Button from '@/components/ui/Button';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import Image from 'next/image';
import { useLanguage, T } from '@/contexts/LanguageContext';

const NavLink: React.FC<{ href: string; active?: boolean; onClick?: () => void; children: React.ReactNode; className?: string }> = ({ 
  href, 
  active = false, 
  onClick, 
  children,
  className = ""
}) => {
  return (
    <Link 
      href={href}
      className={`relative px-3 py-2 font-medium text-sm whitespace-nowrap transition-all duration-300 group ${
        active ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
      } ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-all duration-300 ${
        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </Link>
  );
};

const Header: React.FC = () => {
  const router = useRouter();
  const { isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const controls = useAnimation();
  
  // Handle scroll effect and active link updates
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    
    // Set current page as active link using router.pathname
    setActiveLink(router.pathname);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]); // Re-run when pathname changes

  // Handle animation updates based on scroll state
  useEffect(() => {
    if (scrolled) {
      controls.start({
        height: "70px",
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        boxShadow: "0 4px 20px -2px rgba(0, 38, 66, 0.08)",
        backdropFilter: "blur(8px)",
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      });
    } else {
      controls.start({
        height: "90px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "none",
        backdropFilter: "blur(0px)",
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      });
    }
  }, [controls, scrolled]);

  // Menu animation variants
  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm"
      initial={{ height: "90px", backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      animate={controls}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="hidden sm:inline-block w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">A</span>
              <span className="text-xl font-display font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                <T>Alison Trafikskola</T>
              </span>
            </Link>
          </div>
          
          <nav className={`hidden md:flex ${isRTL ? 'space-x-reverse' : ''} space-x-2 lg:space-x-4 xl:space-x-6`}>
            <NavLink href="/" active={activeLink === '/'}>Hem</NavLink>
            <NavLink href="/about" active={activeLink === '/about'}>Om Ali</NavLink>
            <NavLink href="/courses" active={activeLink === '/courses'}>Kurser</NavLink>
            
            {/* Restore dropdown with improved hover effects */}
            <div className="relative group">
              <button className={`px-3 py-2 font-medium text-sm whitespace-nowrap transition-all duration-300 inline-flex items-center ${
                ['/trafikquiz', '/ovningsrutter', '/framgangshistorier'].includes(activeLink) 
                  ? 'text-blue-600' 
                  : 'text-slate-700 hover:text-blue-600'
              }`}>
                <span>Resurser</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-all duration-300 ${
                  ['/trafikquiz', '/ovningsrutter', '/framgangshistorier'].includes(activeLink) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 px-3 space-y-1 rounded-md">
                  {/* Each link has its own independent hover effect */}
                  <Link 
                    href="/trafikquiz"
                    className={`relative block w-full px-3 py-2 font-medium text-sm transition-all duration-300 ${
                      activeLink === '/trafikquiz' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span>Trafikquiz</span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-all duration-300 ${
                      activeLink === '/trafikquiz' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`}></span>
                  </Link>
                  <Link 
                    href="/ovningsrutter"
                    className={`relative block w-full px-3 py-2 font-medium text-sm transition-all duration-300 ${
                      activeLink === '/ovningsrutter' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span>ÖvningsRutter</span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-all duration-300 ${
                      activeLink === '/ovningsrutter' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`}></span>
                  </Link>
                  <Link 
                    href="/framgangshistorier"
                    className={`relative block w-full px-3 py-2 font-medium text-sm transition-all duration-300 ${
                      activeLink === '/framgangshistorier' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span>FramGårShistorier</span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-all duration-300 ${
                      activeLink === '/framgangshistorier' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`}></span>
                  </Link>
                </div>
              </div>
            </div>
            
            <NavLink href="/blog" active={activeLink.startsWith('/blog')}>Blogg</NavLink>
            <NavLink href="/reviews" active={activeLink === '/reviews'}>Recensioner</NavLink>
            <NavLink href="/contact" active={activeLink === '/contact'}>Kontakt</NavLink>
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              href="/booking" 
              variant="primary" 
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            >
              <span className="whitespace-nowrap">Boka lektion</span>
            </Button>
          </div>
          
          <motion.button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-elegant hover:shadow-elegant-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={mobileMenuOpen}
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-elegant-lg overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto px-4 py-5">
              <nav className={`flex flex-col ${isRTL ? 'space-y-reverse' : ''} space-y-3`}>
                <NavLink 
                  href="/"
                  active={activeLink === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hem
                </NavLink>
                <NavLink 
                  href="/about"
                  active={activeLink === '/about'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Om Ali
                </NavLink>
                <NavLink 
                  href="/courses"
                  active={activeLink === '/courses'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kurser
                </NavLink>
                
                {/* Restore mobile menu resources section */}
                <div className="pl-3 border-l-2 border-blue-100 space-y-3 py-2">
                  <h3 className="font-medium text-gray-700">Resurser</h3>
                  <NavLink 
                    href="/trafikquiz"
                    active={activeLink === '/trafikquiz'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="pl-2"
                  >
                    Trafikquiz
                  </NavLink>
                  <NavLink 
                    href="/ovningsrutter"
                    active={activeLink === '/ovningsrutter'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="pl-2"
                  >
                    ÖvningsRutter
                  </NavLink>
                  <NavLink 
                    href="/framgangshistorier"
                    active={activeLink === '/framgangshistorier'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="pl-2"
                  >
                    FramGårShistorier
                  </NavLink>
                </div>
                
                <NavLink 
                  href="/blog"
                  active={activeLink.startsWith('/blog')}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogg
                </NavLink>
                <NavLink 
                  href="/reviews"
                  active={activeLink === '/reviews'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Recensioner
                </NavLink>
                <NavLink 
                  href="/contact"
                  active={activeLink === '/contact'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </NavLink>
              </nav>
              
              <div className="mt-6 flex flex-col space-y-4">
                <Link 
                  href="/booking"
                  className="w-full bg-blue-600 text-white rounded-md py-2 px-4 text-center font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Boka lektion
                </Link>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+46701234567">070-123 45 67</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@alistrafikskola.se">info@alistrafikskola.se</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;