import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { successStories } from '@/data/success-stories';
import { useLanguage, T } from '@/contexts/LanguageContext';

const SuccessStories: React.FC = () => {
  const { translateImmediate } = useLanguage();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 } 
    }
  };

  // Only load the first image with priority
  const getPriority = (index: number) => index === 0;

  return (
    <>
      <Head>
        <title>Framgångshistorier | Alison Trafikskola</title>
        <meta name="description" content="Läs om våra framgångsrika elever som har tagit körkort med vår hjälp." />
      </Head>

      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Framgångshistorier</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Läs om våra framgångsrika elever som har tagit körkort med vår hjälp
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Våra tidigare elever</h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {successStories.map((story, index) => (
                <motion.div 
                  key={story.id}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={story.image}
                          alt={story.name}
                          fill
                          sizes="64px"
                          quality={65}
                          priority={getPriority(index)}
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-500 hover:scale-110"
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNjY2NjY2MiLz48L3N2Zz4="
                          placeholder="blur"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{story.name}</h3>
                        <p className="text-gray-500">{story.age} år</p>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-3">{story.title}</h4>
                    <p className="text-gray-600 mb-4">{story.story}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-red-600 mb-1">Utmaning</h5>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-green-600 mb-1">Lösning</h5>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                    
                    <blockquote className="italic border-l-4 border-blue-500 pl-4 py-2 my-4 text-gray-600">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                      <div>Godkänd: {story.passedDate}</div>
                      <div>Försök: {story.attempts}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Din framgångshistoria</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Vill du också bli en av våra framgångsrika elever? Vi hjälper dig genom hela processen till att ta ditt körkort.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Personlig handledning av Sveriges bästa körlärare</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Flexibla tider som passar ditt schema</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Bevänt utbildningsprogram med hög kunskapsgrad</span>
                  </li>
                </ul>
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Kontakta oss
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
              <div className="md:w-1/3">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/images/success-stories/default.jpg" 
                    alt="Elev med körkort"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSIjY2NjY2NjIi8+PC9zdmc+"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default SuccessStories; 