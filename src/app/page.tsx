"use client";

import { motion } from "framer-motion";
import { GridCards } from "@/components/grids";

export default function Home() {
  return (
    <section className="bg-[#1B262C] w-full min-h-screen flex bg-[repeating-linear-gradient(45deg,transparent_0,transparent_10px,rgba(168,213,226,0.05)_10px,rgba(168,213,226,0.05)_11px)]">
      
      <div className="mt-24 max-w-5xl mx-auto w-full px-6 py-4 pb-20 flex flex-col bg-[#1B262C]">
        
        {/* Name - 0.4s delay */}
        <motion.h1 
          className="text-white font-stack font-semibold text-3xl leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textShadow: '0 2px 10px rgba(168, 213, 226, 0.3)' }}
        >
          haaziq ali
        </motion.h1>

        {/* Subtitle - 2s delay */}
        <motion.h2 
          className="font-ibm text-base opacity-50 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          learner • frontend & systems programming , 15 year old
        </motion.h2>

        {/* Main content - staggered animations starting at 4s */}
        <motion.h1 
          className="mt-6 font-lexend text-lg opacity-95 font-normal leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
        >  
          I build stuff that will helps me or solve problems with my skills, explore, and think deeply about code, philosophy, and how things work <span className="text-[#A8D5E2] font-semibold">!! </span>
        </motion.h1>
        
        <motion.h1 
          className="mt-4 font-lexend text-lg opacity-90 font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, delay: 4.5 }}
        > 
          <span className="text-[#A8D5E2] font-semibold">Currently:</span> <span className="font-ibm text-[#A8D5E2]">Learning algebra 1 & C++</span> <br /> 
          <span className="text-[#B5CCA3] font-semibold">Reading:</span> Beyond good and evil by friedrich nietsche 
        </motion.h1>

        <motion.h1 
          className="mt-4 font-lexend text-lg opacity-85 font-normal leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.6, delay: 5 }}
        >
          <span className="text-[#6BB5C7] opacity-90 font-semibold">I also do</span> calisthenics, write my thoughts, my ideals, and my ideas. <br /> My interests include computers[whole], chess, philosophy, classical literature, and <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B5CCA3] to-[#A8D5E2]">most influential anime!</span>
        </motion.h1>
        
        <motion.h1 
          className="mt-6 font-ibm text-sm opacity-40 font-light tracking-wider leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.6, delay: 5.5 }}
        >
          ps i love minimalism , improving everyday  and a great admirer of stoicism . THIS SITE IS UNDER CONSTRUCTION 🚧 !!
        </motion.h1>

        {/* Grid Cards - appears after main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 6 }}
        >
          <GridCards/>
        </motion.div>
        
      </div>
    </section>
  );
}