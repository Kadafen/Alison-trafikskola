import React from 'react';
import Seo from '@/components/shared/Seo';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import CoursesSection from '@/components/home/CoursesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import { useLanguage, T } from '@/contexts/LanguageContext';
import type { GetStaticProps } from 'next';

export default function Home() {
  const { translateImmediate } = useLanguage();
  
  return (
    <>
      <Seo
        title={translateImmediate("Hem")}
        description={translateImmediate("Vi hjälper dig ta körkort")}
      />
      
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
}