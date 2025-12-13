"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const themes = [
  // Theme 1: Hero Blue Harmony - Matches #6BB5C7 and #A8D5E2
  {
    gradient: "bg-[linear-gradient(90deg,#6BB5C7_0%,#A8D5E2_50%,#98C1D9_100%)]",
    shadow: "shadow-[0_0_3px_#A8D5E2,0_0_10px_#6BB5C7,0_0_20px_rgba(168,213,226,0.5)]",
  },
  // Theme 2: Subtle Green Accent - Matches #B5CCA3 with blue tones
  {
    gradient: "bg-[linear-gradient(90deg,#B5CCA3_0%,#A8D5E2_50%,#6BB5C7_100%)]",
    shadow: "shadow-[0_0_3px_#B5CCA3,0_0_10px_#A8D5E2,0_0_20px_rgba(181,204,163,0.5)]",
  },
  // Theme 3: Cyan Flow - Bright cyan echoing hero's light blues
  {
    gradient: "bg-[linear-gradient(90deg,#00d2ff_0%,#A8D5E2_100%)]",
    shadow: "shadow-[0_0_3px_#00d2ff,0_0_10px_#A8D5E2,0_0_20px_rgba(0,210,255,0.5)]",
  },
  // Theme 4: Lush Harmony - Green with hero blue undertones
  {
    gradient: "bg-[linear-gradient(90deg,#11998e_0%,#B5CCA3_50%,#A8D5E2_100%)]",
    shadow: "shadow-[0_0_3px_#B5CCA3,0_0_10px_#11998e,0_0_20px_rgba(181,204,163,0.5)]",
  },
  // Theme 5: Deep Teal Mystery - Darker tones suiting hero's dark bg
  {
    gradient: "bg-[linear-gradient(90deg,#2b5876_0%,#6BB5C7_100%)]",
    shadow: "shadow-[0_0_3px_#6BB5C7,0_0_10px_#2b5876,0_0_20px_rgba(107,181,199,0.5)]",
  },
];

export default function Header() {
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  useEffect(() => {
    const interval = setInterval(cycleTheme, 4000); // Auto-cycle every 4 seconds for smooth hero overlay
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-[#1B262C]/80 backdrop-blur-sm z-50" suppressHydrationWarning>
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-ibm font-bold text-xl text-[#e0fbfc]">
          H4ZY 
        </Link>
        <ul className="flex items-center gap-6 font-lexend text-sm">
          <li className="list-none">
            <Link 
              href="/" 
              className="text-[#98c1d9] hover:text-[#e0fbfc] transition-colors"
              onMouseEnter={cycleTheme}
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link 
              href="/about" 
              className="text-[#98c1d9] hover:text-[#e0fbfc] transition-colors"
              onMouseEnter={cycleTheme}
            >
              About
            </Link>
          </li>
          <li className="list-none">
            <Link 
              href="/projects" 
              className="text-[#98c1d9] hover:text-[#e0fbfc] transition-colors"
              onMouseEnter={cycleTheme}
            >
              Projects
            </Link>
          </li>
          <li className="list-none">
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
      
      {/* The "thinking" border - animated pulse + glow */}
      <div 
        className={`
          h-[2px] 
          w-full 
          ${themes[themeIndex].gradient} 
          ${themes[themeIndex].shadow} 
          transition-all 
          duration-700
          ease-in-out
          animate-[pulse_2s_ease-in-out_infinite]
        `}
        style={{
          animation: 'thinking 3s ease-in-out infinite',
        }}
      />
      
      <style jsx>{`
        @keyframes thinking {
          0%, 100% {
            opacity: 1;
            filter: brightness(1) blur(0px);
          }
          50% {
            opacity: 0.7;
            filter: brightness(1.3) blur(1px);
          }
        }
      `}</style>
    </header>
  );
}