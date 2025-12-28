'use client';

import React, { useRef } from 'react'; // Import useRef
import { Github, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

// --- PROJECTS DATA ---
// I've added more projects to better demonstrate the scrolling.
const projectsData = [
  {
    title: 'Swadisht Bites App',
    description: 'A food delivery app offering a diverse menu, real-time order tracking, and secure payments. Features include personalized recommendations, user reviews, and a seamless checkout process for a delightful dining experience.',
    tags: ['React', 'Tailwind CSS', 'React-Native', 'TypeScript', 'Firebase'],
    imageUrl: '/Projects/swadisht.png', // Using placeholders
    liveUrl: '/Projects/swadisht-report.pdf',
    repoUrl: 'https://github.com/shubhsJadhav95/Swadisht-Bites',
  },
  {
    title: 'SkinOCare AI',
    description: 'To design and develop a deep learning–based application that detects and classifies different types of skin lesions using dermoscopic images, enabling early intervention and diagnosis of skin cancer.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Flask','TypeScript', 'React'],
    imageUrl: '/Projects/skinocare.png',
    liveUrl: '/Projects/skinocare-report.pdf',
    repoUrl: 'https://github.com/shubhsJadhav95/SkinOCare',
  },
  {
    title: 'NeoCare Health App',
    description: 'NEOCARE is a mobile and web-based solution that integrates hospital navigation, epharmacy services, and real-time appointment booking within a single platform. ',
    tags: ['Microservices', 'Java', 'Spring Boot', 'React', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: '/Projects/neocare.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/shubhsJadhav95/NeoCare',
  },
];

// Your original Tag component - unchanged
const Tag = ({ text }) => (
  <span className="bg-violet-100 text-violet-700 text-xs font-medium px-2.5 py-1 rounded-full">
    {text}
  </span>
);

export default function Projects() {
  const scrollContainerRef = useRef(null);

  // ✅ Fixed: Added direction param
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 32;
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-10 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Your original Section Header - unchanged */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            My Projects
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            A selection of my work. See something you like!
          </p>
          <div className="w-24 h-1 bg-violet-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Container for scroller and arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute top-1/2 -left-4 lg:-left-6 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-violet-100 transition-colors"
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-6 w-6 text-slate-800" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="mx-5 flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-8 py-4 px-2 scrollbar-hide"
          >
            {projectsData.map((project) => (
              // Each card is now a flex item
              <div
                key={project.title}
                className="snap-start w-[85%] sm:w-[45%] lg:w-[calc(100%/3-1.5rem)] flex-shrink-0"
              >
                {/* --- YOUR ORIGINAL CARD CODE STARTS HERE (UNCHANGED) --- */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:-translate-y-1">
                  {/* Using an img tag directly as Next/Image can sometimes complicate width calculations in sliders */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-justify text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => <Tag key={tag} text={tag} />)}
                    </div>
                    <div className="mt-auto flex items-center gap-4">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors">
                        <ExternalLink size={16} />
                        Report
                      </a>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        <Github size={16} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* --- YOUR ORIGINAL CARD CODE ENDS HERE --- */}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute top-1/2 -right-4 lg:-right-6 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-violet-100 transition-colors"
            aria-label="Scroll right"
          >
            <ArrowRight className="h-6 w-6 text-slate-800" />
          </button>
        </div>
      </div>
    </section>
  );
}