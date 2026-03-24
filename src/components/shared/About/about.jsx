import React from 'react';
import { Download } from 'lucide-react';
import riza from "@/assets/riza.png";

const About = () => {
  return (
    <section id="about" className='w-full py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12'>
        
        {/* Left Column - Text Content */}
        <div className='w-full lg:w-1/2 flex flex-col items-start'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>Who I Am</h1>
          <div className='mt-2 mb-6'>
            <h3 className='text-xl md:text-2xl font-medium text-gray-800 mb-2'>Muhammad Riza Nursyaban</h3>
            <div className='w-12 h-1 bg-gray-900 rounded-full shrink-0'></div>
          </div>
          
          <div className='space-y-5 text-gray-600 text-sm md:text-base leading-relaxed'>
            <p>
              I am a <strong className="font-semibold text-gray-900">Computer Science / Informatics Engineering student</strong> at Brawijaya University specializing in <strong className="font-semibold text-gray-900">Next.js, React, and Flutter</strong>. With experience as a Fullstack Developer at Semeton Corp and Mobile Developer at RAION, I focus on building scalable web and mobile solutions.
            </p>
            <p>
              My journey includes achievements like "Best Case Study Team" at COMPFEST17. I am currently seeking internship opportunities to bring my technical expertise and collaborative spirit to a professional team.
            </p>
          </div>

          {/* Stats Section */}
          <div className='flex items-center gap-8 md:gap-12 mt-10 mb-10'>
            <div className='flex flex-col'>
              <span className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>2+</span>
              <span className='text-xs text-gray-500 uppercase font-medium tracking-wider mt-1'>Years Exp.</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>10+</span>
              <span className='text-xs text-gray-500 uppercase font-medium tracking-wider mt-1'>Projects</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>3.69</span>
              <span className='text-xs text-gray-500 uppercase font-medium tracking-wider mt-1'>GPA</span>
            </div>
          </div>

          <button className='group flex items-center gap-2 bg-[#0f0f43] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg'>
            Download CV
            <Download className='w-4 h-4 group-hover:translate-y-0.5 transition-transform' />
          </button>
        </div>

        {/* Right Column - Image Container */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0'>
          <div className='w-full max-w-[400px] aspect-[4/5] bg-stone-100 rounded-[2rem] relative overflow-hidden flex items-end justify-center p-0 shadow-sm'>
            {/* Top Left Circle Decoration */}
            <div className='absolute top-0 left-0 w-32 h-32 bg-stone-200/50 rounded-br-[100px]'></div>
            {/* Bottom Right Circle Decoration */}
            <div className='absolute bottom-4 right-4 w-16 h-16 border border-black/80 rounded-full bg-transparent z-20'></div>
            
            <img 
              src={riza} 
              alt="Muhammad Riza Nursyaban" 
              className='relative z-10 w-full h-[95%] object-cover object-top drop-shadow-sm'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;