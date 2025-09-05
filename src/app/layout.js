import './globals.css';
import FloatingContactWidget from '@/components/FloatingContactWidget';

export const metadata = {
  title: {
    default: 'Smart Wireless-Bluetooth | Premium Earbuds',
    template: '%s | Smart Wireless-Bluetooth'
  },
  description: 'Premium wireless earbuds with Bluetooth 5.3, touch controls, and waterproof design.',
  keywords: [
    'Smart Wireless-Bluetooth',
    'Bluetooth earphones',
    'wireless earbuds',
    'touch control',
    'waterproof'
  ],
  authors: [{ name: 'Emerald Store' }],
  openGraph: {
    title: 'Smart Wireless-Bluetooth Earbuds',
    description: 'Premium wireless earbuds with advanced features',
    url: 'https://www.emeraldstore.com/',
    images: [
      {
        url: 'https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/bluetooth-001.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Wireless-Bluetooth Earbuds'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1176033614217437&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-screen bg-white">
        <FloatingContactWidget />
        {children}
      </body>
    </html>
  );
}