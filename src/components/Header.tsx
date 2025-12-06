"use client";

import Link from "next/link";
import { useState } from "react";

const themes = [
  // Theme 1: Cool Haze (Original) - Calm Blue/Teal
  {
    gradient: "bg-[linear-gradient(90deg,#98C1D9_0%,#4682A9_50%,#3D99A2_100%)]",
    shadow: "shadow-[0_0_3px_#98C1D9,0_0_10px_#4682A9,0_0_20px_rgba(70,130,169,0.5)]",
  },
  // Theme 2: Electric Violet - Blue to Purple
  {
    gradient: "bg-[linear-gradient(90deg,#4776E6_0%,#8E54E9_100%)]",
    shadow: "shadow-[0_0_3px_#8E54E9,0_0_10px_#4776E6,0_0_20px_rgba(142,84,233,0.5)]",
  },
  // Theme 3: Cyan Punch - Bright Cyan to Blue
  {
    gradient: "bg-[linear-gradient(90deg,#00d2ff_0%,#3a7bd5_100%)]",
    shadow: "shadow-[0_0_3px_#00d2ff,0_0_10px_#3a7bd5,0_0_20px_rgba(0,210,255,0.5)]",
  },
  // Theme 4: Lush Green - Nature vibes
  {
    gradient: "bg-[linear-gradient(90deg,#11998e_0%,#38ef7d_100%)]",
    shadow: "shadow-[0_0_3px_#38ef7d,0_0_10px_#11998e,0_0_20px_rgba(56,239,125,0.5)]",
  },
  // Theme 5: Midnight Mystery - Dark Blue/Purple
  {
    gradient: "bg-[linear-gradient(90deg,#2b5876_0%,#4e4376_100%)]",
    shadow: "shadow-[0_0_3px_#4e4376,0_0_10px_#2b5876,0_0_20px_rgba(78,67,118,0.5)]",
  },
];

export default function Header() {
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <header className="fixed top-0 w-full bg-[#1B262C]/80 backdrop-blur-sm z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mplus font-bold text-xl text-[#e0fbfc]">
          H4ZY 
        </Link>
        <ul className="flex items-center gap-6 font-lexend text-sm">
          <li>
            <Link 
              href="/" 
              className="text-[#98c1d9] hover:text-[#e0fbfc] transition-colors"
              onMouseEnter={cycleTheme}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-[#98c1d9] hover:text-[#e0fbfc] transition-colors"
              onMouseEnter={cycleTheme}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className="text-[#98c1d9] hover:text-[#e0fbfc] transition-colors"
              onMouseEnter={cycleTheme}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="text-[#98c1d9] hover:text-[#e0fbfc] transition-colors"
              onMouseEnter={cycleTheme}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`h-[2px] w-full ${themes[themeIndex].gradient} ${themes[themeIndex].shadow} transition-all duration-500`}></div>
    </header>
  );
}
