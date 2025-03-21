import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '@/components/shared/Seo';
import RatingStars from '@/components/ui/RatingStars';
import { testimonials, Testimonial } from '@/data/testimonials';
import { useRouter } from 'next/router';
import type { GetStaticProps } from 'next';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Reviews() {
  const router = useRouter();
  const isRTL = false; // We're no longer supporting RTL
  const [filters, setFilters] = useState({
    courseType: 'all',
    rating: 0
  });
  
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>(testimonials);
  const [visibleItems, setVisibleItems] = useState(6); // Initial number of visible items
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    courseType: '',
    rating: 0,
    review: '',
    consent: false
  });
  
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  // Course types from testimonials data
  const uniqueCourseTypes = Array.from(new Set(testimonials.map(t => t.courseType)));
  const courseTypes = ['all', ...uniqueCourseTypes];
  
  // Apply filters when they change
  useEffect(() => {
    let results = [...testimonials];
    
    if (filters.courseType !== 'all') {
      results = results.filter(t => t.courseType === filters.courseType);
    }
    
    if (filters.rating > 0) {
      results = results.filter(t => t.rating >= filters.rating);
    }
    
    setFilteredTestimonials(results);
    setVisibleItems(6); // Reset to initial amount when filters change
  }, [filters]);
  
  // Load more testimonials when intersection observer triggers
  const loadMore = useCallback(() => {
    if (loading) return;
    
    setLoading(true);
    setTimeout(() => {
      setVisibleItems(prevVisibleItems => {
        // Don't load more than what's available
        const nextVisibleItems = prevVisibleItems + 6;
        return Math.min(nextVisibleItems, filteredTestimonials.length);
      });
      setLoading(false);
    }, 500); // Add slight delay to simulate loading
  }, [loading, filteredTestimonials.length]);
  
  // Set up intersection observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && visibleItems < filteredTestimonials.length) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );
    
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [visibleItems, filteredTestimonials.length, loadMore]);
  
  const handleFilterChange = (type: 'courseType' | 'rating', value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  // Handle star rating selection
  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        age: '',
        courseType: '',
        rating: 0,
        review: '',
        consent: false
      });
      
      // Show success message for 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <>
      <Seo
        title="Recensioner - Alison Trafikskola"
        description="Läs vad våra elever säger om Alison Trafikskola. Vi har hjälpt hundratals elever att ta körkort med ett personligt och professionellt förhållningssätt."
      />
      
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Recensioner från våra elever
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Läs vad våra elever säger om sin erfarenhet med Alison Trafikskola
              <br />
              Vi har hjälpt hundratals elever att ta körkort med ett personligt och professionellt förhållningssätt
            </p>
          </motion.div>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-12 p-6 bg-white rounded-xl shadow-elegant"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <label htmlFor="courseType" className="text-sm font-medium text-slate-700 whitespace-nowrap">
                  Kurstyp
                </label>
                <select
                  id="courseType"
                  value={filters.courseType}
                  onChange={(e) => handleFilterChange('courseType', e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-4 py-2.5 focus:ring-blue-500 focus:border-blue-500"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  {courseTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type === 'all' ? 'Alla kurser' : type}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <label htmlFor="rating" className="text-sm font-medium text-slate-700 whitespace-nowrap">
                  Betyg
                </label>
                <select
                  id="rating"
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', Number(e.target.value))}
                  className="bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-4 py-2.5 focus:ring-blue-500 focus:border-blue-500"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <option value={0}>Alla betyg</option>
                  <option value={5}>5 ★</option>
                  <option value={4}>4+ ★</option>
                  <option value={3}>3+ ★</option>
                </select>
              </div>
            </div>
          </motion.div>
          
          {/* Results count */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-5xl mx-auto mb-8 text-slate-600"
          >
            Visar {filteredTestimonials.length} av totalt {testimonials.length} recensioner
          </motion.p>
          
          {/* Testimonials grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredTestimonials.length > 0 ? (
                // Only render the visible items
                filteredTestimonials.slice(0, visibleItems).map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    variants={fadeIn}
                    exit={{ opacity: 0, y: 20 }}
                    layout
                    className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start mb-4">
                      <div className="mr-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-100">
                          <Image 
                            src={testimonial.image || '/images/testimonials/default.jpg'} 
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            quality={75}
                            loading={index < 6 ? "eager" : "lazy"}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIzMiIgZmlsbD0iI2UyZThmMCIvPjwvc3ZnPg=="
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-slate-600 text-sm mb-1">
                          {testimonial.age} år, {testimonial.location}
                        </p>
                        <div className="flex mb-1">
                          <RatingStars rating={testimonial.rating} size="sm" />
                        </div>
                        <span className="text-blue-600 text-xs font-medium px-2 py-0.5 bg-blue-50 rounded-full inline-block">
                          {testimonial.courseType}
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <svg 
                        className="h-8 w-8 text-blue-100 absolute -top-2 -left-2" 
                        fill="currentColor" 
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      
                      <p className="text-slate-600 text-base italic leading-relaxed pl-4 mb-4">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="h-px flex-grow bg-slate-200"></div>
                        <p className="text-xs text-slate-400 px-2">
                          2023
                        </p>
                        <div className="h-px flex-grow bg-slate-200"></div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-slate-600">
                    Inga recensioner hittades med de valda filtren
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Load more indicator */}
          {visibleItems < filteredTestimonials.length && (
            <div 
              ref={loadMoreRef}
              className="w-full py-10 flex justify-center"
            >
              <div className="flex items-center justify-center">
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                ) : (
                  <button 
                    onClick={loadMore}
                    className="px-6 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Ladda fler
                  </button>
                )}
              </div>
            </div>
          )}
          
          {/* Review submission form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto my-20 bg-white rounded-2xl shadow-elegant overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Lämna en recension
              </h2>
              <p className="text-slate-600 mb-8">
                Din feedback hjälper oss att förbättra vår service och hjälper andra elever att välja rätt körskola
              </p>
              
              {formSubmitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-green-800">Tack för din recension!</h3>
                      <p className="mt-2 text-green-700">
                        Din recension har skickats in framgångsrikt och kommer att visas på vår webbplats efter granskning.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Namn *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ditt namn"
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        E-post *
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Din e-postadress"
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-1">
                        Ålder
                      </label>
                      <input 
                        type="number" 
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        min="16"
                        max="99"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Din ålder"
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div>
                      <label htmlFor="courseType" className="block text-sm font-medium text-slate-700 mb-1">
                        Kurstyp *
                      </label>
                      <select 
                        id="courseType"
                        name="courseType"
                        value={formData.courseType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="" disabled>Välj kurstyp</option>
                        {uniqueCourseTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Betyg *
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className={`focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1 ${
                            formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                          } transition-colors duration-200`}
                          aria-label={`Rate ${star} stars`}
                        >
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                    {formData.rating === 0 && (
                      <p className="text-sm text-red-600 mt-1">Betygsättning krävs</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="review" className="block text-sm font-medium text-slate-700 mb-1">
                      Din recension *
                    </label>
                    <textarea 
                      id="review"
                      name="review"
                      value={formData.review}
                      onChange={handleInputChange}
                      rows={5} 
                      required
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Berätta om din upplevelse med Alison Trafikskola..."
                    dir={isRTL ? 'rtl' : 'ltr'}
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-slate-600">
                      Jag godkänner att min recension och mitt namn publiceras på Alison Trafikskolas webbplats
                    </label>
                  </div>
                  
                  <div>
                    <button 
                      type="submit"
                      disabled={submitting || formData.rating === 0}
                      className={`inline-flex items-center px-6 py-3 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        submitting || formData.rating === 0
                          ? 'bg-blue-400 text-white cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Skickar...</span>
                        </>
                      ) : (
                        <>
                          <span>Skicka recensionen</span>
                          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h15" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-20 p-8 bg-blue-600 text-white rounded-2xl shadow-elegant text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Redo att starta din körkortsresa?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Kontakta oss idag för att prata med våra erfarna instruktörer och hitta det perfekta utbildningspaketet för dig
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-medium"
            >
              <span>Kontakta oss</span>
              <svg className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
}