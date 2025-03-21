import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { courses } from '@/data/courses';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const CoursesSection: React.FC = () => {
  const [expandedFeatures, setExpandedFeatures] = useState<Record<number, boolean>>({});
  
  const toggleFeatures = (courseId: number) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">Våra utbildningspaket</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Vi erbjuder skräddarsydda paket för alla behov, oavsett om du är nybörjare 
            eller behöver uppdatera dina färdigheter
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.slice(0, 3).map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] } }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-elegant-lg group transition-all duration-300 flex flex-col h-full"
            >
              {course.popular && (
                <div className="absolute top-5 right-5 z-10 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md">
                  Populärast
                </div>
              )}
              
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={course.image || '/images/courses/default.jpg'}
                  alt={course.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="transition-transform duration-700 ease-out-expo group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60 opacity-80"></div>
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                </div>
              </div>
              
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex-grow">
                  <p className="text-slate-600 mb-5 leading-relaxed h-[80px] line-clamp-3">{course.description}</p>
                  
                  <ul className="mb-7 space-y-3">
                    {(expandedFeatures[course.id] ? course.features : course.features.slice(0, 3)).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="ml-3 text-slate-600">{feature}</span>
                      </li>
                    ))}
                    {!expandedFeatures[course.id] && course.features.length > 3 && (
                      <li 
                        className="flex items-center justify-center text-blue-600 font-medium text-sm mt-3 cursor-pointer hover:text-blue-700 transition-colors group"
                        onClick={() => toggleFeatures(course.id)}
                      >
                        <span className="border-b border-blue-300 pb-0.5 group-hover:border-blue-600 transition-colors">+{course.features.length - 3} fler fördelar</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </li>
                    )}
                    {expandedFeatures[course.id] && (
                      <li 
                        className="flex items-center justify-center text-blue-600 font-medium text-sm mt-3 cursor-pointer hover:text-blue-700 transition-colors group"
                        onClick={() => toggleFeatures(course.id)}
                      >
                        <span className="border-b border-blue-300 pb-0.5 group-hover:border-blue-600 transition-colors">Visa färre</span>
                        <svg className="w-4 h-4 ml-1 transform rotate-180 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Från</p>
                      <p className="text-3xl font-bold text-slate-800">{course.price} <span className="text-sm font-medium text-slate-600">kr</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Tidsåtgång</p>
                      <p className="text-sm font-bold text-slate-700">{course.duration}</p>
                    </div>
                  </div>
                  
                  <Button 
                    href={`/courses#${course.id}`} 
                    fullWidth
                    className="group"
                    icon={
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    }
                    iconPosition="right"
                  >
                    Läs mer om kursen
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button 
            href="/courses" 
            variant="outline" 
            size="lg"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            }
            iconPosition="right"
          >
            Se alla våra utbildningspaket
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;