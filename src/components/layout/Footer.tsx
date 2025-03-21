import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Alison Trafikskola</h3>
            <p className="mb-4 text-slate-300">
              Sveriges mest eftertraktade trafikskola. Lär dig köra med Sveriges bästa körlärare.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Följ oss på Facebook"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,0.08H5.23C2.97,0.08,1.15,1.9,1.15,4.16v15.67c0,2.25,1.82,4.08,4.08,4.08h6.53v-8.31h-2.78v-3.85h2.78v-2.2c0-2.97,1.82-4.58,4.46-4.58c1.27,0,2.36,0.1,2.68,0.14v3.1l-1.84,0c-1.44,0-1.72,0.69-1.72,1.69v2.09h3.44l-0.45,3.85h-2.99v8.31h3.43c2.26,0,4.08-1.83,4.08-4.08V4.16C22.85,1.9,21.03,0.08,18.77,0.08z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Följ oss på Instagram"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0.01,4.85,0.07c3.25,0.15,4.77,1.69,4.92,4.92c0.06,1.27,0.07,1.65,0.07,4.85c0,3.2-0.01,3.58-0.07,4.85c-0.15,3.23-1.66,4.77-4.92,4.92c-1.27,0.06-1.64,0.07-4.85,0.07c-3.2,0-3.58-0.01-4.85-0.07c-3.26-0.15-4.77-1.69-4.92-4.92c-0.06-1.27-0.07-1.64-0.07-4.85c0-3.2,0.01-3.58,0.07-4.85C2.38,3.86,3.9,2.32,7.15,2.17C8.42,2.11,8.8,2.1,12,2.1V2.16z M12,0C8.74,0,8.33,0.01,7.05,0.07C2.7,0.27,0.27,2.69,0.07,7.05C0.01,8.33,0,8.74,0,12s0.01,3.67,0.07,4.95c0.2,4.36,2.62,6.78,6.98,6.98C8.33,23.99,8.74,24,12,24s3.67-0.01,4.95-0.07c4.35-0.2,6.78-2.62,6.98-6.98C23.99,15.67,24,15.26,24,12s-0.01-3.67-0.07-4.95c-0.2-4.35-2.62-6.78-6.98-6.98C15.67,0.01,15.26,0,12,0L12,0z M12,5.84C8.6,5.84,5.84,8.6,5.84,12S8.6,18.16,12,18.16S18.16,15.4,18.16,12S15.4,5.84,12,5.84z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z M18.41,4.15c-0.8,0-1.45,0.65-1.45,1.45S17.61,7.05,18.41,7.05s1.45-0.65,1.45-1.45S19.21,4.15,18.41,4.15z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  Om Ali
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Kurser
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-slate-300 hover:text-white transition-colors">
                  Recensioner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Trafikskolegatan 123<br />123 45 Stockholm</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>08-123 45 67</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@allistrafikskola.se</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Öppettider</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex justify-between">
                <span>Måndag - Fredag</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lördag</span>
                <span>10:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Söndag</span>
                <span>Stängt</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-slate-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Allis Trafikskola. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-slate-400 text-sm hover:text-white transition-colors">
                Integritetspolicy
              </Link>
              <Link href="/terms" className="text-slate-400 text-sm hover:text-white transition-colors">
                Villkor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;