import type { Metadata } from 'next'
import { Poller_One, Abril_Fatface, Abhaya_Libre } from "next/font/google";
import './globals.css'


const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abhaya",
});
const pollerOne = Poller_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poller",
});
const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
});

export const metadata: Metadata = {
  title: 'Nomads App',
  description: 'Safely travel the world with Nomads',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${abrilFatface.variable} ${pollerOne.variable} ${abhayaLibre.variable}`}>{children}</body>
    </html>
  )
}
