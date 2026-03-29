import React from "react";
import riza from "@/assets/hero.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20  flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <p className="text-xl md:text-2xl font-medium text-gray-700">
          Hi, I'm Riza
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.15] md:leading-[1.05] tracking-tight">
          <span className="block text-[#0f0f43] mb-2">Data-Driven Digital Marketing & Research Analyst </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed pt-2">
          From Data to Decisions : A Data-Driven Marketer with Proven Experience in Academic Research and Publication, Specializing in Digital Marketing and Insight-Driven Strategies
        </p>

        {/* Button Get In Touch */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
          <Button className="h-14 px-8 rounded-lg bg-[#0f0f43] hover:hover:scale-110 text-white text-base font-semibold shadow-none transition-all">
            Get In Touch
          </Button>
          <Button
            variant="outline"
            className="h-14 px-8 rounded-lg border-2 border-gray-200 bg-transparent hover:scale-110 text-[#111827] text-base font-semibold shadow-none transition-all"
          >
            Browse Projects
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 pb-10 lg:pb-0">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px]">
          {/* Dashed outer circle */}
          <div className="absolute -inset-6 md:-inset-10 rounded-full border-[1.5px] border-dashed border-[#cdb4f5]"></div>

          {/* Main image container */}
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
            <img
              src={riza}
              alt="Riza"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
