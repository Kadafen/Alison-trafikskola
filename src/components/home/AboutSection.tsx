import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage, T } from '@/contexts/LanguageContext';
import useNetworkQuality from '@/hooks/useNetworkQuality';

const AboutSection: React.FC = () => {
  const { translateImmediate } = useLanguage();
  const { imageQuality, isSlowConnection } = useNetworkQuality();
  
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/alison/presentingdiskussion.JPG"
                alt={translateImmediate("Ali undervisar en elev")}
                fill
                priority={false}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                quality={imageQuality}
                style={{ objectFit: "cover", objectPosition: "center 10%" }}
                className="rounded-xl shadow-xl"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZWFlYWVhIi8+PC9zdmc+"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          {/* Content Column */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading"><T>Möt Ali</T></h2>
              <div className="section-divider"></div>
              
              <p className="text-lg mb-6 text-slate-600">
                <T>Ali är en av Sveriges mest erfarna och uppskattade körlärare med över 15 års erfarenhet av att hjälpa elever att bli säkra och kompetenta förare.</T>
              </p>
              
              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-slate-600">
                    <span className="font-semibold text-slate-700"><T>Certifierad</T></span> <T>med alla nödvändiga licenser för trafikutbildning enligt Transportstyrelsens krav.</T>
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-slate-600">
                    <span className="font-semibold text-slate-700"><T>Specialiserad</T></span> <T>på att hjälpa nervösa förare och elever med särskilda utmaningar att lyckas.</T>
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-slate-600">
                    <span className="font-semibold text-slate-700"><T>Flerspråkig</T></span> <T>med möjlighet att erbjuda lektioner på svenska, engelska och arabiska.</T>
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-slate-600">
                    <span className="font-semibold text-slate-700"><T>Personlig approach</T></span> <T>där varje elev får en skräddarsydd utbildningsplan baserad på individuella behov.</T>
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-8 text-slate-600">
                <T>Med Ali som din handledare kan du vara säker på att få högkvalitativ utbildning och pedagogisk vägledning genom hela processen att ta körkort.</T>
              </p>
              
              <Button href="/about" size="lg">
                <T>Läs mer om Ali</T>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;