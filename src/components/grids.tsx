"use client";
import writing from "./assets/writing.webp"
import anime from "./assets/vinland.webp"
import Image from "next/image";
import gitCat from "./assets/gitCat.webp";
import goat from "./assets/dostovesky.webp"
import { motion } from "framer-motion";
import quote from "./assets/tree.webp"
export const GridCards = () => {
    return (
        <div className="w-full">
            <section className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-4 text-white">
                
                {/* 1. GitHub Card (col-span-3) */}
                <motion.a
                    href="https://github.com/HAAZIQ-ALI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-3 flex flex-col relative group overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl min-h-[220px] border border-white/10 hover:border-[#98C1D9]/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)" }}
                >
                    <Image 
                        src={gitCat} 
                        alt="GitHub" 
                        className="w-full h-full object-cover absolute inset-0 opacity-70 group-hover:opacity-90 transition-all duration-500"
                    />
                    <div className="relative z-10 p-6 mt-auto flex items-center gap-3">
                        <svg className="w-8 h-8 text-[#e0fbfc] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <div>
                            <h1 className="text-xl font-extrabold text-[#e0fbfc] mb-1 drop-shadow-lg font-stack">GitHub</h1>
                            <h2 className="text-sm text-white/90 drop-shadow-md">all the stuff i learn & build!</h2>
                        </div>
                    </div>
                </motion.a>

                {/* 2. Writing Card (col-span-2) */}
                <motion.div 
                    className="col-span-2 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl min-h-[220px] p-6 border border-white/10 hover:border-[#A1BC98]/50 transition-colors cursor-pointer relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ clipPath: "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 0 100%)" }}
                >
                    <Image 
                        src={writing} 
                        alt="Writing" 
                        className="w-full h-full object-cover absolute inset-0 opacity-60 group-hover:opacity-80 transition-all duration-500"
                    />
                    <div className="flex items-center gap-3 relative z-10">
                        <svg className="w-8 h-8 text-[#e0fbfc] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                        </svg>
                        <div>
                            <h1 className="text-xl font-extrabold text-[#e0fbfc] mb-1 font-stack drop-shadow-lg">Writing</h1>
                            <h2 className="text-sm text-white/90 drop-shadow-md">stuff i write when i am dumb!</h2>
                        </div>
                    </div>
                    <svg className="absolute bottom-6 right-6 w-24 h-24 opacity-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                </motion.div>

                {/* 3. Books Card (col-span-1) */}
                <motion.div 
                    className="col-span-1 flex flex-col relative group overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl min-h-[220px] border border-white/10 hover:border-[#73946B]/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 5%)" }}
                >
                    <Image 
                        src={goat} 
                        alt="Dostoevsky - The GOAT" 
                        className="w-full h-full object-cover absolute inset-0 opacity-70 group-hover:opacity-90 transition-all duration-500"
                    />
                    <div className="relative z-10 p-6 mt-auto">
                        <svg className="w-8 h-8 text-[#e0fbfc] drop-shadow-lg mb-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" />
                        </svg>
                        <h1 className="text-xl font-extrabold text-[#e0fbfc] mb-1 drop-shadow-lg font-stack">Books</h1>
                        <h2 className="text-xs text-white/90 drop-shadow-md">books i have read!</h2>
                    </div>
                </motion.div>

                {/* 4. Anime/Manga Card (col-span-1) */}
                <motion.a
                    href="https://anilist.co/user/hazyDev4live/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1 flex flex-col relative group overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl min-h-[220px] border border-white/10 hover:border-[#E0AFA0]/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 90% 100%, 0 100%)" }}
                >
                    <Image 
                        src={anime} 
                        alt="Anime - Vinland Saga" 
                        className="w-full h-full object-cover absolute inset-0 opacity-70 group-hover:opacity-90 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E0AFA0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                        <svg className="w-10 h-10 text-[#E0AFA0] drop-shadow-lg mb-auto" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4H18M4,18V9H20V18H4Z" />
                        </svg>
                        <div>
                            <h1 className="text-lg font-extrabold text-[#e0fbfc] mb-1 font-stack drop-shadow-lg">Anime</h1>
                            <h2 className="text-xs text-white/90 drop-shadow-md">comfort & philosophy</h2>
                        </div>
                    </div>
                </motion.a>

                {/* 5. Skills Card (col-span-2) */}
               <motion.div 
                    className="col-span-2 flex flex-col rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl min-h-[220px] p-6 border border-white/10 hover:border-[#98C1D9]/50 transition-colors cursor-pointer relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%, 0 90%)" }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <svg className="w-8 h-8 text-[#98C1D9]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.4,16.6L4.8,12L3.4,13.4L9.4,19.4L21.4,7.4L20,6L9.4,16.6M9,2A7,7 0 0,1 16,9C16,10.57 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.57,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2M9,4A5,5 0 0,0 4,9A5,5 0 0,0 9,14A5,5 0 0,0 14,9A5,5 0 0,0 9,4Z" />
                        </svg>
                        <div>
                            <h1 className="text-xl font-bold text-[#e0fbfc] mb-1 font-stack">Skills</h1>
                            <h2 className="text-sm text-white/70"> what i work with</h2>
                        </div>
                    </div>
                    
                    {/* Scrolling Skills Container */}
                    <div className="relative h-24 overflow-hidden">
                        {/* First Row - Languages & Frameworks */}
                        <motion.div 
                            className="flex gap-3 mb-3 absolute top-0"
                            animate={{ x: [0, -1200] }}
                            transition={{ 
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">C</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">C++</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">Python</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">TypeScript</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">Next.js</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">Tailwind CSS</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Second Row - Tools */}
                        <motion.div 
                            className="flex gap-3 absolute bottom-0"
                            animate={{ x: [-1200, 0] }}
                            transition={{ 
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">VS Code</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">Git</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium" > Arch Linux</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#98c1d9]/10 border border-[#98c1d9]/30 text-[#98c1d9] whitespace-nowrap">
                                        <span className="text-xs font-medium">Nvim</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#98C1D9]/5 rounded-full blur-3xl group-hover:bg-[#98C1D9]/10 transition-all duration-500" />
                </motion.div>
                {/* 6. Quote Card (col-span-3) */}
                <motion.div 
                    className="col-span-3 flex flex-col justify-center items-center rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl min-h-[220px] p-8 border border-white/10 hover:border-[#A1BC98]/50 transition-colors cursor-pointer relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
                >
                    <Image 
                        src={quote} 
                        alt="Quote background" 
                        fill 
                        className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#A1BC98]/20 to-transparent z-[1]" />
                    <svg className="absolute top-6 left-6 w-12 h-12 text-[#A1BC98]/20 z-[2]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" />
                    </svg>
                    <blockquote className="relative z-10 text-center">
                        <p className="text-lg md:text-xl font-extrabold font-ibm text-white/90 italic mb-4 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            "
                            Every saint has a past, <br /> every sinner has a future "
                        </p>
                        <footer className="text-sm text-[#A1BC98] font-medium">
                            — Oscar Wilde
                        </footer>
                    </blockquote>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#A1BC98]/5 rounded-full blur-3xl group-hover:bg-[#A1BC98]/10 transition-all duration-500" />
                </motion.div>

            </section>
        </div>
    );
}