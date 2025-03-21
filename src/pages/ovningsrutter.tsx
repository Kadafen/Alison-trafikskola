import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage, T } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { DrivingRoute, drivingRoutes, DifficultyLevel, getRoutesByDifficulty } from '@/data/driving-routes';
import Seo from '@/components/shared/Seo';

const DrivingRoutes: React.FC = () => {
  const { translateImmediate } = useLanguage();
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [filteredRoutes, setFilteredRoutes] = useState<DrivingRoute[]>(drivingRoutes);

  // Handle filtering by difficulty
  const handleFilterChange = (difficulty: DifficultyLevel | 'all') => {
    setSelectedDifficulty(difficulty);
    setFilteredRoutes(getRoutesByDifficulty(difficulty));
  };

  // Determine color for difficulty badge
  const getDifficultyColor = (difficulty: DifficultyLevel): string => {
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800'
    };
    return colors[difficulty];
  };

  return (
    <>
      <Seo
        title={translateImmediate("Övningsrutter")}
        description={translateImmediate("Utforska våra noggrant utvalda övningsrutter för att förbättra dina körfärdigheter. Perfekt för både nybörjare och avancerade förare.")}
      />

      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3"><T>Övningsrutter</T></h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              <T>Utforska våra noggrant utvalda övningsrutter för att förbättra dina körfärdigheter. Perfekt för både nybörjare och avancerade förare.</T>
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  selectedDifficulty === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <T>Alla nivåer</T>
              </button>
              <button
                onClick={() => handleFilterChange('beginner')}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  selectedDifficulty === 'beginner'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <T>Nybörjare</T>
              </button>
              <button
                onClick={() => handleFilterChange('intermediate')}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  selectedDifficulty === 'intermediate'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <T>Mellannivå</T>
              </button>
              <button
                onClick={() => handleFilterChange('advanced')}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  selectedDifficulty === 'advanced'
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <T>Avancerad</T>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoutes.map((route, index) => (
              <motion.div
                key={route.id}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={route.mapImage}
                    alt={route.name}
                    fill
                    style={{objectFit: "cover"}}
                    className="transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    loading={index < 3 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`${getDifficultyColor(route.difficulty)} px-2 py-1 rounded text-xs font-semibold`}>
                      {route.difficulty === 'beginner' ? <T>Nybörjare</T> : 
                       route.difficulty === 'intermediate' ? <T>Mellannivå</T> : 
                       <T>Avancerad</T>}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{route.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{route.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {route.estimatedTime}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      {route.distance}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {route.trafficIntensity === 'low' ? <T>Låg trafik</T> : 
                       route.trafficIntensity === 'medium' ? <T>Medel trafik</T> : 
                       <T>Hög trafik</T>}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link 
                      href={`/ovningsrutter/${route.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <T>Visa detaljer</T>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredRoutes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600"><T>Inga rutter hittades</T></p>
              <button
                onClick={() => handleFilterChange('all')}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                <T>Visa alla rutter</T>
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="md:col-span-1 bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-4"><T>Råd från din instruktör</T></h3>
                <p className="text-gray-600 mb-4">
                  <T>Att öva på egen hand är viktigt, men det kan vara utmanande att veta var man ska börja. Här är några experttips för att få ut mest av dina övningsrutter.</T>
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><T>Börja med enklare rutter och arbeta dig gradvis upp till mer utmanande</T></p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><T>Planera din rutt i förväg och bekanta dig med eventuella knepiga korsningar</T></p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><T>Träna på samma rutt flera gånger för att bygga självförtroende innan du går vidare</T></p>
                  </div>
                </div>
                <Link 
                  href="/kontakt" 
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  <T>Boka en lektion med instruktör</T>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-72 w-full rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1556122071-e404eaedb77f"
                  alt={translateImmediate("Körlektion med instruktör")}
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DrivingRoutes; 