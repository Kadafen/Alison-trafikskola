import React from 'react';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Seo from '@/components/shared/Seo';
import BookingCalendar, { BookingDetails } from '@/components/ui/BookingCalendar';
import { useLanguage, T } from '@/contexts/LanguageContext';

export default function Booking() {
  const { translateImmediate } = useLanguage();

  const handleBookingComplete = (bookingDetails: BookingDetails) => {
    console.log('Booking completed:', bookingDetails);
    // In a real application, you would send this data to your backend
  };

  return (
    <>
      <Seo
        title="Bokning"
        description="Boka körlektioner med Alison Trafikskola"
      />
      
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Boka Körlektioner
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Boka en lektion med Sveriges bästa körlärare
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-3xl mx-auto"
          >
            <BookingCalendar onComplete={handleBookingComplete} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-8 shadow-elegant"
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">
                    Flexibel schemaläggning
                  </h3>
                  <p className="text-slate-600">
                    Behöver du omboka? Inga problem. Du kan ändra din bokning upp till 24 timmar före din schemalagda tid utan avgifter.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">
                    Expertinstruktion
                  </h3>
                  <p className="text-slate-600">
                    Alla våra instruktörer är certifierade och har års erfarenhet. Du lär dig från de bästa för att bli en självsäker och säker förare.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 mb-2">
                    Transparenta priser
                  </h3>
                  <p className="text-slate-600">
                    Inga dolda avgifter eller överraskningsavgifter. Våra priser är tydliga och öppna, så du vet exakt vad du betalar för.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // Empty props since we're no longer using i18next
  };
};