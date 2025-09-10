import './globals.css'
import FloatingContactWidget from '@/components/FloatingContactWidget'
import Script from 'next/script'

export const metadata = {
  title: {
    default: 'Smart Wireless-Bluetooth | Noise Canceling Headset',
    template: '%s | Smart Wireless-Bluetooth',
  },
  description:
    'Smart Wireless-Bluetooth 5.3 headset with noise canceling mic, LED display, 100H battery life, ergonomic fit, and dual-device connection for seamless work and calls.',
  keywords: [
    'Bluetooth 5.3 headset',
    'wireless Bluetooth earpiece',
    'noise canceling headset',
    'business Bluetooth earphone',
    'hands free Bluetooth headset',
  ],
  authors: [{ name: 'Emerald Store' }],
  openGraph: {
    title: 'Smart Wireless-Bluetooth 5.3 Noise Canceling Headset',
    description:
      'Upgrade your calls and music with Smart Wireless-Bluetooth 5.3 headset featuring LED display, 100H battery, noise canceling mic, and ergonomic all-day comfort.',
    url: 'https://www.emeraldstore.com/',
    images: [
      {
        url: 'https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/bluetooth-001.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Wireless-Bluetooth 5.3 Headset',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-white font-poppins">
        <FloatingContactWidget />
        {children}

        {/* ✅ Facebook Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1176033614217437');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* ✅ NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1176033614217437&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}