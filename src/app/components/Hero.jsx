'use client';
import { Download, Briefcase } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-violet-900/30 rounded-full blur-3xl animate-pulse"></div>

            <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center z-10 my-16 sm:my-24">

                {/* Text Column */}
                <div className="text-center lg:text-left">
                    <p className="text-lg font-medium text-violet-400 mb-2">
                        Hello I&apos;m
                    </p>

                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-100 mb-4 tracking-tight">
                        Shubham Jadhav
                    </h1>

                    {/* Mobile-only circular image */}
                    <div className="block lg:hidden mb-6">
                        <div className="mx-auto w-28 h-28 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-lg opacity-30"></div>
                            <div className="relative w-full h-full bg-slate-800/60 rounded-full flex items-center justify-center border-2 border-slate-700">
                                <img
                                    src="/hero.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Single-line animation */}
                    <h2 className="hidden sm:block text-2xl lg:text-3xl font-semibold text-slate-300 mb-8">
                        <span className="typewriter-desktop bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                            Java Developer & AI/ML Enthusiast
                        </span>
                    </h2>

                    {/* Mobile: Two lines (no animation) */}
                    <h2 className="block sm:hidden text-xl font-semibold text-slate-300 mb-8 leading-snug">
                        <span className="block bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                            Java Developer
                        </span>
                        <span className="block bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                            AI/ML Enthusiast
                        </span>
                    </h2>

                    <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
                        💻 Passionate Java developer building secure and scalable applications.<br />
                        🤖 AI/ML enthusiast exploring intelligent, data-driven solutions for real-world problems.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="group bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30"
                        >
                            <span>View My Work</span>
                            <Briefcase size={18} className="transition-transform duration-300 group-hover:rotate-[-5deg]" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-slate-800/50 border border-slate-700 text-slate-300 px-6 py-3 rounded-full hover:bg-slate-800 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <span>Download Resume</span>
                            <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                        </a>
                    </div>
                </div>

                {/* Desktop image right column */}
                <div className="hidden lg:flex justify-center items-center">
                    <div className="relative w-80 h-80">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-xl animate-pulse opacity-40"></div>
                        <div className="relative w-full h-full bg-slate-800/60 rounded-full flex items-center justify-center border-2 border-slate-700">
                            <img
                                src="/shubhs.png"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
