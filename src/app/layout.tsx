import type { Metadata } from "next";
import {
  Lexend_Deca,
  Stack_Sans_Notch,
  IBM_Plex_Mono
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomeLoader from "@/components/WelcomeLoader";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Haaziq Ali | 15 Year Old Developer & Builder",
  description:
    "Portfolio of Haaziq Ali - 15 year old self-taught developer specializing in C++, systems programming, and web development. Based in India.",
  keywords:
    "Haaziq Ali, H4ZY, developer, C++, Next.js, portfolio, 15 year old developer, India, teen dev, frontend developer",
  metadataBase: new URL("https://karou.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haaziq Ali | Developer & Learner",
    description:
      "15 year old self-taught developer building with C++ and web technologies",
    url: "https://karou.me",
    siteName: "H4ZY Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/167455693?v=4",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haaziq Ali | Developer & Learner",
    description:
      "15 year old self-taught developer building with C++ and web technologies",
    images: ["https://avatars.githubusercontent.com/u/167455693?v=4"],
  },
};
const lexend = Lexend_Deca({
  variable: "--font-lexend",

  subsets: ["latin"],
});



const stack = Stack_Sans_Notch({
  variable: "--font-stack",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  weight: "400",
  subsets:["latin"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${stack.variable}  ${ibm.variable}  antialiased`}
      >
        <JsonLd />
        <WelcomeLoader>
          <Header />
          <main>{children}</main>
          <Footer />
        </WelcomeLoader>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
