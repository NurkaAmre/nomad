import type { Metadata } from "next";
import { Poller_One, Abril_Fatface, Abhaya_Libre, Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/Layout/AuthProvider";
import Header from "@/components/header";
import Footer from "@/components/UI/Footer";

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
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nomads App",
  description: "Safely travel the world with Nomads",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${abrilFatface.variable} ${pollerOne.variable} ${abhayaLibre.variable} ${poppins.variable}`}
      >
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
