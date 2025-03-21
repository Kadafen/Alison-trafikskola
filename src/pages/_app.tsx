import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '@/styles/globals.css';
import '@/styles/rtl.css';

// Google Analytics tracking ID (replace with your actual ID when deploying)
const GA_TRACKING_ID = 'G-XXXXXXXXXX';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Only track if gtag is available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;

// Add TypeScript for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      trackingId: string,
      config?: { 
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
  }
}