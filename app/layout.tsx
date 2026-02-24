import type { Metadata } from "next";
import { Orbitron, Roboto, Space_Mono } from "next/font/google";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  metadataBase: new URL("https://marcin.phd"),
  title: {
    default: "Marcin Szczodrak | Homepage",
    template: "%s | Marcin Szczodrak",
  },
  description:
    "Marcin Szczodrak's homepage. Exploring the intersection of construction, IoT, robotics, and AI.",
  keywords: [
    "Marcin Szczodrak",
    "Software Engineer",
    "Robotics",
    "IoT",
    "Columbia University",
    "AI",
  ],
  authors: [{ name: "Marcin Szczodrak", url: "https://marcin.phd" }],
  creator: "Marcin Szczodrak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marcin.phd",
    title: "Marcin Szczodrak | Homepage",
    description:
      "Passionate software engineer building innovative solutions in robotics, AI, and IoT.",
    siteName: "Marcin Szczodrak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcin Szczodrak | Homepage",
    description:
      "Passionate software engineer building innovative solutions in robotics, AI, and IoT.",
    creator: "@mszczodrak",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          <Navbar />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
