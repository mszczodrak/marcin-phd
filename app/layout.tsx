// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "@/app/ui/globals.css";
// import AnalyticsProvider from '@/components/AnalyticsProvider';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Marcin Szczodrak Homepage",
//   description: "msz.ai - Marcin Szczodrak's homepage about the construction, IoT, robotics, and AI.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
//       >
//         <AnalyticsProvider>
//           {children}
//         </AnalyticsProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Orbitron, Roboto, Space_Mono } from "next/font/google";
import AnalyticsProvider from '@/components/AnalyticsProvider';
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
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}