"use client";

import { motion } from "framer-motion";
import { GridCards } from "@/components/grids";

export default function Home() {
  return (
    <section className="bg-[#1B262C] w-full min-h-screen flex">
    
      <div className="mt-24 max-w-5xl mx-auto w-full px-6 py-4 pb-20 flex flex-col">
        
        {/* Name - 0.4s delay */}
        <motion.h1 
          className="text-white font-stack font-medium text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          haaziq ali
        </motion.h1>

        {/* Subtitle - 2s delay */}
        <motion.h2 
          className="font-mplus text-xl opacity-30 font-extralight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          learner • frontend & systems programming , 15 year old
        </motion.h2>

        {/* Main content - staggered animations starting at 4s */}
        <motion.h1 
          className="mt-4 font-lexend text-lg opacity-90 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
        >  
          I build stuff that will helps me or solve problems with my skills, explore, and think deeply about code, philosophy, and how things work <span className="text-[#98c1d9]">!! </span>
        </motion.h1>
        
        <motion.h1 
          className="mt-1 font-lexend text-lg opacity-90 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, delay: 4.5 }}
        > 
          <span className="text-[#98c1d9]">Currently:</span> <span className="font-suse">Learning algebra 1 & C++</span>  <br /> 
          <span className="text-[#A1BC98]">Reading:</span> Beyond good and evil by friedrich nietsche 
        </motion.h1>

        <motion.h1 
          className="mt-1 font-lexend text-lg opacity-85 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.6, delay: 5 }}
        >
          <span className="text-[#5BA3B5] opacity-85">I also do</span> calisthenics, write my thoughts, my ideals, and my ideas. <br /> My interests include computers[whole], chess, philosophy, classical literature, and <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A1BC98] to-[#98c1d9]">most influential anime!</span>
        </motion.h1>
        
        <motion.h1 
          className="mt-2 font-mplus text-lg opacity-30 font-extralight leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
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