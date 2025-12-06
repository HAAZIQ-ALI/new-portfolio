import type { Metadata } from "next";
import { Lexend_Deca, Stack_Sans_Notch, M_PLUS_Rounded_1c, SUSE_Mono, Patrick_Hand_SC } from 'next/font/google'; 
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomeLoader from "@/components/WelcomeLoader";

const  lexend = Lexend_Deca({

variable: "--font-lexend",

subsets: ["latin"],

});

const mplus = M_PLUS_Rounded_1c({
  variable: "--font-mplus",
  subsets: ["latin"],
  weight: ["400", "700"],
});



const stack = Stack_Sans_Notch({
  variable: "--font-stack",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const suse = SUSE_Mono({
  variable: "--font-suse",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const patrickHand = Patrick_Hand_SC({
  variable: "--font-patrick",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "h4zy portfolio",
  description: "portfolio of haaziq ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${stack.variable} ${mplus.variable} ${suse.variable} ${patrickHand.variable} antialiased`}
      >
        <WelcomeLoader>
          <Header />
          <main>{children}</main>
          <Footer />
        </WelcomeLoader>
        <Analytics />
      </body>
    </html>
  );
}
