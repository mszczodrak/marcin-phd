import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";
import AnalyticsProvider from '@/components/AnalyticsProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
