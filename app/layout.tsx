import './globals.css'
import { defaultMetadata } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import Script from 'next/script'

export const metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TXDN5GH"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5TXDN5GH');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </body>
    </html>
  )
}
