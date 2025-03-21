import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Seo from '@/components/shared/Seo';
import Button from '@/components/ui/Button';
import { useLanguage, T } from '@/contexts/LanguageContext';
import { GetStaticProps } from 'next';

export default function About() {
  const { translateImmediate } = useLanguage();

  const teachingApproach = [
    {
      title: "Individuell inlärning",
      description: "Jag anpassar varje lektion för att matcha din inlärningsstil och dina specifika behov",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Lugn och pedagogisk",
      description: "Stressad? Ingen fara. Min styrka är att skapa en trygg miljö där du kan lära dig i din egen takt",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Praktiskt och teoretiskt",
      description: "Jag kombinerar verkliga körupplevelser med teoretiska kunskaper för helhetsinlärning",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Säkerhetsfokuserad",
      description: "Mitt mål är inte bara att du ska klara uppkörningen, utan att du ska bli en säker förare för livet",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const journey = [
    {
      year: "2005-2008",
      title: "Utbildning & certifiering",
      description: "Genomgick trafikpedagogutbildning vid Trafikverket efter en ingenjörskarriär"
    },
    {
      year: "2008-2015",
      title: "Erfarenhet vid större trafikskolor",
      description: "Undervisade vid större trafikskolor i Stockholm och utvecklade min personliga metodik"
    },
    {
      year: "2015",
      title: "Grundade Allis Trafikskola",
      description: "Startade egen verksamhet med fokus på personlig handledning och högre godkännandegrad"
    },
    {
      year: "2015-2023",
      title: "Utveckling & expansion",
      description: "Byggde upp ett rykte som en av Stockholms mest eftertraktade körlärare med 92% godkännandegrad"
    }
  ];

  return (
    <>
      <Seo
        title={translateImmediate("Om Ali")}
        description={translateImmediate("Lär känna Ali - en av Sveriges mest erfarna och uppskattade trafikpedagoger med över 15 års erfarenhet")}
      />
      
      {/* Hero Section with Split Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 md:bg-gradient-to-r md:from-slate-50 md:from-55% md:to-blue-600 z-0"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                  <span className="relative">
                    <T>Personlig</T>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200"></span>
                  </span> <T>körundervisning med Ali</T>
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  <T>Lär känna Ali - en av Sveriges mest erfarna och uppskattade trafikpedagoger med över 15 års erfarenhet</T>
                </p>

                <blockquote className="pl-6 border-l-4 border-blue-600 italic text-slate-700 my-8">
                  <T>"Att köra bil är en livslång färdighet – min uppgift är att göra dig till en förare som fattar säkra beslut i alla trafiksituationer."</T>
                  <footer className="text-sm font-semibold mt-2 text-slate-600 not-italic">— Ali Alli</footer>
                </blockquote>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 relative">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="relative h-[400px] md:h-[560px] w-full rounded-2xl overflow-hidden shadow-elegant-lg">
                  <Image
                    src="/images/alison/presentingalush.JPG"
                    alt={translateImmediate("Ali undervisar en elev")}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="transition-transform duration-10000 ease-out-expo hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-none"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:hidden">
                    <h2 className="text-2xl font-bold mb-2">Ali Alli</h2>
                    <p><T>Trafikpedagog & Grundare</T></p>
                  </div>
                </div>
                
                {/* Stats card */}
                <motion.div 
                  className="absolute -bottom-10 -right-10 md:right-auto md:-left-10 bg-white p-6 rounded-lg shadow-elegant-lg max-w-[280px] hidden md:block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                >
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">92%</h3>
                  <p className="text-slate-700"><T>av mina elever godkänns på första uppkörningen, jämfört med riksgenomsnittet på 49%</T></p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* My Teaching Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-4"><T>Min pedagogiska filosofi</T></h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              <T>Det som särskiljer min undervisning från andra trafikskolor</T>
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
            {teachingApproach.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-slate-50 rounded-xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2"><T>{item.title}</T></h3>
                <p className="text-slate-600"><T>{item.description}</T></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey Timeline - Replacing with a better component */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-4">Erfarenhet & Kompetens</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Mångårig expertis och ett starkt fokus på pedagogik och trafiksäkerhet
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Utbildningsbakgrund</h3>
              <p className="text-slate-600 mb-4">Examen i trafikpedagogik, med specialisering inom trafiksäkerhet och körbeteende.</p>
              <div className="flex items-center text-blue-600">
                <span className="text-sm font-semibold">2005 - 2008</span>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Branscherfarenhet</h3>
              <p className="text-slate-600 mb-4">Över 15 års erfarenhet från några av Sveriges största trafikskolor innan grundandet av Allis Trafikskola.</p>
              <div className="flex items-center text-blue-600">
                <span className="text-sm font-semibold">2008 - 2015</span>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Resultat & Framgångar</h3>
              <p className="text-slate-600 mb-4">92% godkännandegrad på första försöket, vilket placerar oss i toppen bland Sveriges trafikskolor.</p>
              <div className="flex items-center text-blue-600">
                <span className="text-sm font-semibold">2015 - Nu</span>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Specialistområden</h3>
              <p className="text-slate-600 mb-4">Särskild kompetens inom trafikpsykologi och hantering av nervositet och körångest hos elever.</p>
              <div className="flex items-center text-blue-600">
                <span className="text-sm font-semibold">Expertis</span>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Fortbildning</h3>
              <p className="text-slate-600 mb-4">Kontinuerlig utbildning inom trafiksäkerhet, pedagogik och nya tekniker för körundervisning.</p>
              <div className="flex items-center text-blue-600">
                <span className="text-sm font-semibold">Livslångt lärande</span>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Kundtillfredställelse</h3>
              <p className="text-slate-600 mb-4">Över 1200 nöjda elever och ett genomsnittligt betyg på 4.9 av 5 baserat på elevrecensioner.</p>
              <div className="flex items-center text-blue-600">
                <span className="text-sm font-semibold">875+ femstjärniga recensioner</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Values */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Min drivkraft</h2>
              <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
            </motion.div>
            
            <motion.div 
              className="prose prose-lg prose-invert max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl leading-relaxed">
                För mig handlar körundervisning inte bara om trafikteknik. Det handlar om att vara en mentor som hjälper dig att bli en självständig och ansvarsfull förare. Jag känner en djup tillfredställelse när mina elever inte bara klarar uppkörningen, utan när jag ser dem växa i självförtroende och förmåga bakom ratten.
              </p>
              
              <p className="text-xl leading-relaxed">
                Jag startade Allis Trafikskola för att jag trodde på en bättre utbildningsmetod – en som prioriterar <strong>långsiktigt trafiksäkert beteende</strong> framför kortsiktiga resultat. Min tillfredsställelse kommer från vetskapen att mina elever är väl förberedda för ett livslångt säkert körande.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-slate-50 rounded-xl p-8 shadow-elegant">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-800 mb-4">Nyfiken på att prova min undervisningsmetod?</h2>
                <p className="text-slate-600 mb-6">
                  Boka en introduktionslektion och upplev skillnaden själv
                </p>
                <Button 
                  href="/contact" 
                  className="group"
                  icon={
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                  iconPosition="right"
                >
                  Boka tid nu
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
}