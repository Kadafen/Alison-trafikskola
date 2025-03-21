import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Seo from '@/components/shared/Seo';
import Button from '@/components/ui/Button';
import { courses } from '@/data/courses';
import { GetStaticProps } from 'next';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');
  const courseSectionRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [expandedFeatures, setExpandedFeatures] = useState<Record<number, boolean>>({});
  
  // Function to toggle feature expansion
  const toggleFeatures = (courseId: number) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };
  
  // Fix for the ref error - use a callback ref that doesn't return a value
  const setCourseSectionRef = (id: number) => (el: HTMLDivElement | null) => {
    courseSectionRefs.current[id] = el;
    return undefined; // Return undefined instead of the element to fix the type error
  };
  
  // Filter courses based on active tab
  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => {
        if (activeTab === 'beginner' && (course.id === 1 || course.id === 2 || course.id === 3)) return true;
        if (activeTab === 'special' && (course.id === 4 || course.id === 5)) return true;
        return false;
      });
  
  // Scroll to course section when clicked from hash link
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const courseId = parseInt(hash.replace('#', ''));
        if (!isNaN(courseId) && courseSectionRefs.current[courseId]) {
          setTimeout(() => {
            courseSectionRefs.current[courseId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 500);
        }
      }
    }
  }, []);
  
  return (
    <>
      <Seo
        title="Kurser - Alison Trafikskola"
        description="Hitta kursen som passar just dig hos Alison Trafikskola. Vi erbjuder skräddarsydda körkortspaket för olika behov."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Hitta <span className="text-blue-600 relative">
                kursen
                <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-200"></span>
              </span> som passar just dig
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Alla våra körkortspaket är designade för att ge dig den bästa möjliga inlärningsupplevelsen, anpassad för dina unika behov och mål.
            </p>
          </motion.div>
          
          {/* Filter Tabs */}
          <motion.div 
            className="flex justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            <button
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white shadow-elegant' 
                  : 'bg-white text-slate-700 hover:bg-slate-50 shadow-elegant'
              }`}
              onClick={() => setActiveTab('all')}
            >
              Alla kurser
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'beginner' 
                  ? 'bg-blue-600 text-white shadow-elegant' 
                  : 'bg-white text-slate-700 hover:bg-slate-50 shadow-elegant'
              }`}
              onClick={() => setActiveTab('beginner')}
            >
              För nya förare
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'special' 
                  ? 'bg-blue-600 text-white shadow-elegant' 
                  : 'bg-white text-slate-700 hover:bg-slate-50 shadow-elegant'
              }`}
              onClick={() => setActiveTab('special')}
            >
              Specialkurser
            </button>
          </motion.div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/5 left-1/4 w-[30rem] h-[30rem] rounded-full mix-blend-normal opacity-[0.07] bg-gradient-radial from-blue-300 to-transparent"></div>
          <div className="absolute -bottom-1/2 right-1/5 w-[40rem] h-[40rem] rounded-full mix-blend-normal opacity-[0.05] bg-gradient-radial from-blue-300 to-transparent"></div>
        </div>
      </section>
      
      {/* Courses List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-24 md:space-y-32"
            >
              {filteredCourses.map((course) => (
                <div 
                  key={course.id} 
                  id={`${course.id}`}
                  ref={setCourseSectionRef(course.id)}
                  className="scroll-mt-24"
                >
                  <motion.div 
                    className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <div className="lg:w-5/12 relative">
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-elegant-lg">
                        <Image
                          src={course.image || '/images/courses/default.jpg'}
                          alt={course.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="transition-transform duration-10000 ease-out-expo hover:scale-105"
                        />
                        {course.popular && (
                          <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md font-medium">
                            Populärast
                          </div>
                        )}
                      </div>
                      
                      {/* Price tag */}
                      <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-elegant-lg p-4 text-center w-36">
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Från</p>
                        <p className="text-3xl font-bold text-slate-800">{course.price} kr</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-7/12">
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-4">{course.title}</h2>
                      <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                      
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">{course.description}</p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-slate-800 mb-4">Detta ingår:</h3>
                        <ul className="grid md:grid-cols-2 gap-x-4 gap-y-3">
                          {course.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1">
                                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="ml-3 text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between sm:items-end mb-6">
                        <div className="w-full sm:w-auto">
                          <h3 className="text-lg font-semibold text-slate-800 mb-1">Tidsåtgång</h3>
                          <p className="text-slate-600">Uppskattad tid: <span className="font-medium">{course.duration}</span></p>
                        </div>
                        
                        <Button 
                          href="/contact" 
                          className="w-full sm:w-auto group"
                          icon={
                            <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          }
                          iconPosition="right"
                        >
                          Boka kurs
                        </Button>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-sm text-slate-600 italic">
                          <span className="font-semibold text-blue-800">Tips från Ali:</span> Denna kurs är särskilt lämplig för 
                          {course.id === 1 && " dig som vill prova på innan du binder dig till ett större paket."}
                          {course.id === 2 && " dig som kan avsätta tid för regelbundna lektioner under en längre period."}
                          {course.id === 3 && " dig som har möjlighet att studera intensivt under en kortare period."}
                          {course.id === 4 && " dig som har körkort från annat land och behöver konvertera till svenskt."}
                          {course.id === 5 && " dig som har körkort men inte kört på länge och vill öka ditt självförtroende."}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Separator */}
                  {course.id !== filteredCourses[filteredCourses.length - 1].id && (
                    <div className="w-full h-px bg-slate-200 mt-16"></div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-4">Vanliga frågor om kurserna</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600">
              Här hittar du svar på några av de vanligaste frågorna vi får om våra utbildningspaket
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-elegant"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3">Kan jag byta paket om jag börjat med ett?</h3>
              <p className="text-slate-600">
                Ja, du kan uppgradera eller justera ditt paket när som helst under utbildningen baserat på dina behov och din progression.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-elegant"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3">Hur bokningar fungerar?</h3>
              <p className="text-slate-600">
                Efter din första bokning skapar vi en personlig utbildningsplan, och du kan sedan boka lektioner online eller via telefon baserat på tillgänglighet.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-elegant"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3">Kan jag få extra lektioner utöver paketet?</h3>
              <p className="text-slate-600">
                Absolut, vi erbjuder extra körlektioner vid behov. Dessa faktureras separat och kan bokas när du känner att du behöver mer övning.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-elegant"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3">Vad händer om jag missar en bokad lektion?</h3>
              <p className="text-slate-600">
                Vi ber dig avboka senast 24 timmar innan. Lektioner som avbokas senare debiteras full avgift, men vi försöker alltid hitta flexibla lösningar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-elegant-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-7/12 p-8 md:p-10 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Redo att börja din körkortsresa?</h2>
                  <p className="mb-6 opacity-90">
                    Ta första steget mot din körkortsdröm redan idag. Boka ett gratis informationsmöte där vi diskuterar dina mål och rekommenderar bästa vägen framåt för just dig.
                  </p>
                  <Button 
                    href="/contact" 
                    variant="subtle"
                    className="group"
                    icon={
                      <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    }
                    iconPosition="right"
                  >
                    Kontakta oss nu
                  </Button>
                </motion.div>
              </div>
              <div className="md:w-5/12 relative hidden md:block">
                <div className="absolute inset-0 bg-black/20"></div>
                <Image
                  src="/images/instructor-ali.jpg"
                  alt="Kontakta Alison Trafikskola"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};