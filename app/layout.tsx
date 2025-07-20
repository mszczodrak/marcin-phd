import type { Metadata } from "next";
import { Orbitron, Roboto, Space_Mono } from "next/font/google";
import AnalyticsProvider from '@/components/AnalyticsProvider';
import { Navbar } from "@/components/navbar";
import "@/app/globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Marcin Szczodrak Homepage",
  description: "msz.ai - Marcin Szczodrak's homepage about the construction, IoT, robotics, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${orbitron.variable} ${roboto.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <AnalyticsProvider>
          <Navbar/>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}