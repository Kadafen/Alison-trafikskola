import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const GA_TRACKING_ID = 'G-XXXXXXXXXX';

  return (
    <Html lang="sv">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Critical CSS for mobile */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body { overflow-x: hidden; }
              @media (max-width: 640px) {
                .container { padding-left: 1rem; padding-right: 1rem; }
                img { max-width: 100%; height: auto; }
              }
            `,
          }}
        />
        
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}