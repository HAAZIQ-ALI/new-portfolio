"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  { text: "Ciao", lang: "Italian" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "السلام عليكم", lang: "Arabic" },
  { text: "Hello", lang: "English" },
];

export default function WelcomeLoader({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 bg-[#1B262C] flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                className="font-stack text-4xl md:text-6xl lg:text-7xl text-[#e0fbfc] font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {greetings[currentIndex].text}
              </motion.h1>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
