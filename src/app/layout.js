import './globals.css'
import FloatingContactWidget from '@/components/FloatingContactWidget'
// Correct import - this module is built into your Next.js version
import { Facebook } from 'next/third-parties/google'

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

        {/* ✅ CORRECT: Using the built-in Facebook Pixel component */}
        <Facebook
          appId=""
          pixelId="1176033614217437" // Ensure this is your correct Pixel ID
        />

      </body>
    </html>
  )
}