import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage, T } from '@/contexts/LanguageContext';
import useNetworkQuality from '@/hooks/useNetworkQuality';

// Animation variants for staggered animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      delay: custom * 0.1,
      ease: [0.19, 1, 0.22, 1]
    }
  })
};

const fadeInRight = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

const HeroSection: React.FC = () => {
  const { translateImmediate } = useLanguage();
  const { imageQuality, isSlowConnection } = useNetworkQuality();

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h1 
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight"
              variants={fadeInUp}
              custom={0}
            >
              <T>Lär dig köra med </T> <span className="text-blue-600 relative">
                <T>Sveriges bästa</T>
                <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-200"></span>
              </span> <T> körlärare</T>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-8 leading-relaxed"
              variants={fadeInUp}
              custom={1}
            >
              <T>Hos Allis Trafikskola får du personlig handledning av Ali – Sveriges mest efterfrågade körlärare med över 15 års erfarenhet och 92% godkända på första försöket.</T>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={fadeInUp}
              custom={2}
            >
              <Button 
                href="/contact" 
                size="lg"
                className="transform transition-all duration-300 hover:shadow-elegant-lg hover:translate-y-[-2px]"
              >
                <T>Boka Introduktionslektion</T>
              </Button>
              <Button 
                href="/about" 
                variant="outline" 
                size="lg"
                className="transform transition-all duration-300 hover:bg-blue-50"
              >
                <T>Läs Mer Om Ali</T>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 inline-flex items-center bg-white px-5 py-3 rounded-full shadow-elegant"
              variants={fadeInUp}
              custom={3}
              whileHover={{ 
                y: -3,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex -space-x-3 mr-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image 
                      src={`/images/avatars/avatar-${item}.jpg`} 
                      alt="Student avatar" 
                      width={32} 
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <svg key={item} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-600 font-medium"><T>875+ femstjärniga recensioner</T></p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="md:w-1/2 relative w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <motion.div
              className="relative w-full h-[300px] sm:h-[400px] md:h-[540px] rounded-2xl overflow-hidden shadow-elegant-lg"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] }
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/alison/alipotrait.JPG"
                  alt={translateImmediate("Körlärare Ali")}
                  fill
                  priority={!isSlowConnection}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  quality={imageQuality}
                  style={{ objectFit: "cover", objectPosition: "center right" }}
                  className="transition-all duration-700 filter hover:brightness-105 rounded-xl shadow-xl instructor-image"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZWFlYWVhIi8+PC9zdmc+"
                  loading={isSlowConnection ? "lazy" : "eager"}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold">92%</span> <T>godkända på första försöket</T>
            </motion.div>
            
            {/* Floating review */}
            <motion.div 
              className="absolute bottom-10 -left-8 bg-white p-5 rounded-lg shadow-elegant-lg max-w-[280px] hero-floating-review"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 shadow-md">
                  <Image 
                    src="/images/testimonials/sofia.jpg" 
                    alt="Sofia" 
                    width={48} 
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Sofia J.</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <svg key={item} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed">
                <T>"Ali är fantastisk! Jag klarade uppkörningen på första försöket tack vare hans tydliga instruktioner."</T>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements - more subtle, sophisticated gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/5 left-1/4 w-[30rem] h-[30rem] rounded-full mix-blend-normal opacity-[0.07] bg-gradient-radial from-blue-300 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/5 w-[25rem] h-[25rem] rounded-full mix-blend-normal opacity-[0.07] bg-gradient-radial from-blue-400 to-transparent"></div>
        <div className="absolute top-2/3 left-1/3 w-[20rem] h-[20rem] rounded-full mix-blend-normal opacity-[0.05] bg-gradient-radial from-blue-200 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;