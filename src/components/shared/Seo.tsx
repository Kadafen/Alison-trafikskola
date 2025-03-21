import React from 'react';
import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const Seo: React.FC<SeoProps> = ({ 
  title, 
  description, 
  canonical = 'https://alisontrafikskola.se',
  ogImage = 'https://alisontrafikskola.se/og-image.jpg' 
}) => {
  // Ensure title is a string to prevent "array as children" React warning
  const fullTitle = `${title} | Alison Trafikskola`;
  
  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={canonical} key="canonical" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={fullTitle} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content={ogImage} key="og:image" />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:site_name" content="Alison Trafikskola" key="og:site_name" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={fullTitle} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
      <meta name="twitter:image" content={ogImage} key="twitter:image" />
    </Head>
  );
};

export default Seo;