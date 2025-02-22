import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Image from "next/image";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexra Tech | AI & Web Solutions",
  description: "We empower businesses with cutting-edge technology solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased overflow-x-hidden`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full">
          <Image
            src="/background2.webp" // Mobile background
            alt="Background"
            fill
            className="object-cover md:hidden" // Mobile only
            priority
          />
          <Image
            src="/background3.webp" // Desktop background
            alt="Background"
            fill
            className="object-cover hidden md:block" // Desktop only
            priority
          />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
