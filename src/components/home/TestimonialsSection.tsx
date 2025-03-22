import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Image from 'next/image';
import RatingStars from '@/components/ui/RatingStars';
import { testimonials } from '@/data/testimonials';

// Animation variants for staggered animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

const testimonialVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.645, 0.045, 0.355, 1.000] // Cubic bezier for smoother transition
    }
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.645, 0.045, 0.355, 1.000] // Cubic bezier for smoother transition
    }
  })
};

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(1);
  const controls = useAnimation();
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Create a progress bar animation
  const startProgressAnimation = () => {
    controls.set({ scaleX: 0 });
    controls.start({
      scaleX: 1,
      transition: { duration: 5, ease: "linear" }
    });
  };
  
  useEffect(() => {
    if (autoplay) {
      startProgressAnimation();
      
      autoplayTimerRef.current = setInterval(() => {
        setDirection(1);
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    } else {
      // Smoothly reset the progress bar when autoplay is turned off
      controls.start({ scaleX: 0, transition: { duration: 0.3 } });
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay]);
  
  const handlePrevious = () => {
    setDirection(-1);
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    resetAutoplayTimer();
    startProgressAnimation();
  };
  
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((activeIndex + 1) % testimonials.length);
    setAutoplay(false);
    resetAutoplayTimer();
    startProgressAnimation();
  };
  
  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setAutoplay(false);
    resetAutoplayTimer();
    startProgressAnimation();
  };
  
  const resetAutoplayTimer = () => {
    // Resume autoplay after 10 seconds of inactivity
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setTimeout(() => setAutoplay(true), 10000);
  };
  
  const handleMouseEnter = () => {
    // Smoothly pause the animation
    controls.stop();
    setAutoplay(false);
  };
  
  const handleMouseLeave = () => {
    setAutoplay(true);
    startProgressAnimation();
  };
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50 testimonial-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">Vad våra elever säger</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Lyssna på vad våra tidigare elever har att säga om sin upplevelse med Allis Trafikskola
          </p>
        </motion.div>
        
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="region" 
          aria-label="Testimonials from students"
          aria-roledescription="carousel"
        >
          {/* Progress bar container - always present to maintain layout */}
          <div className="w-full h-1 bg-blue-100 rounded-full overflow-hidden mb-10">
            {autoplay && (
              <motion.div 
                className="h-full bg-blue-600 origin-left" 
                animate={controls}
              />
            )}
          </div>
          
          <div className="relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white rounded-2xl p-8 md:p-10 shadow-elegant-lg"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                  <div className="md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-5 ring-4 ring-blue-100 shadow-elegant">
                      <Image 
                        src={testimonials[activeIndex].image || '/images/testimonials/default.jpg'} 
                        alt={testimonials[activeIndex].name}
                        width={112}
                        height={112}
                        quality={70}
                        priority={activeIndex === 0}
                        placeholder="blur"
                        sizes="112px"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjExMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjU2IiBjeT0iNTYiIHI9IjU2IiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-1">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-2">
                        {testimonials[activeIndex].age} år, {testimonials[activeIndex].location}
                      </p>
                      <p className="text-blue-600 text-sm font-medium mb-4 px-3 py-1 bg-blue-50 rounded-full inline-block">
                        {testimonials[activeIndex].courseType}
                      </p>
                      <div className="flex justify-center">
                        <RatingStars rating={testimonials[activeIndex].rating} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 relative">
                    <svg 
                      className="h-12 w-12 text-blue-100 mb-4 absolute -top-2 -left-2" 
                      fill="currentColor" 
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    <p className="text-slate-600 text-lg mb-6 italic leading-relaxed pl-6">
                      "{testimonials[activeIndex].text}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="h-px flex-grow bg-slate-200"></div>
                      <p className="text-sm text-slate-400 px-4">
                        2023
                      </p>
                      <div className="h-px flex-grow bg-slate-200"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation arrows */}
            <button
              className="absolute top-1/2 -left-5 md:-left-14 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-elegant hover:shadow-elegant-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:-translate-x-1"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              className="absolute top-1/2 -right-5 md:-right-14 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-elegant hover:shadow-elegant-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:translate-x-1"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Pagination indicator */}
          <div className="flex justify-center mt-10 space-x-3" role="tablist">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                onClick={() => handleDotClick(index)}
                aria-selected={index === activeIndex}
                aria-label={`Go to testimonial ${index + 1}`}
                role="tab"
              >
                <span className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-slate-300 group-hover:bg-slate-400'
                }`}></span>
              </button>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a 
            href="/reviews" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 px-6 py-3 bg-white rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span>Läs fler recensioner</span>
            <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;