import React from 'react';
import Seo from '@/components/shared/Seo';
import ContactSection from '@/components/home/ContactSection';
import { GetStaticProps } from 'next';

export default function Contact() {
  return (
    <>
      <Seo
        title="Kontakta oss - Alison Trafikskola"
        description="Kontakta Alison Trafikskola i Malmö för att boka körlektioner eller få svar på dina frågor. Vi erbjuder personlig service och hjälper dig på vägen mot körkortet."
      />
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Kontakta oss
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">
              Vi finns här för att svara på dina frågor och hjälpa dig att komma igång med din körkortsutbildning
            </p>
          </div>
          
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};