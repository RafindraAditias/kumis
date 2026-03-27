import React from "react";
import { Download } from "lucide-react";
import riza from "@/assets/riza.png";
import { GraduationCap, BookOpenCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            M. Riza Nur Sya'ban
            <hr className="w-full bg-black py-[1px] my-5" />
          </h1>

          <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed pb-10 text-justify">
            <p>
              Fresh graduate with a strong foundation in data-driven digital
              marketing, market research, and analytics. Developed the ability
              to interpret data, identify relevant patterns, and turn findings
              into actionable insights that support strategic decision-making.
              Demonstrates a strong interest in using data to understand market
              trends, consumer behavior, and digital performance.
              <br />
              <br />

              Supported by experience in academic research, publication, and
              evidence-based analysis, with strong attention to detail and
              structured thinking. Able to work with both qualitative and
              quantitative information to produce clear, relevant, and
              insight-driven outputs. Brings an analytical mindset, research
              capability, and strong willingness to learn in dynamic
              professional environments.
            </p>
            <p className="flex gap-2 font-semibold">
              <GraduationCap />
              Universitas Pendidikan Indonesia - Tourism Marketing Management
            </p>
            <p className="flex gap-2 font-semibold">
              <BookOpenCheck />
              GPA : 3.86/4.00
            </p>
          </div>

          <button className="group flex items-center gap-2 bg-[#0f0f43] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg">
            Download CV
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Right Column - Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
          <div className="w-full max-w-[400px] aspect-[4/5] bg-stone-100 rounded-[2rem] relative overflow-hidden flex items-end justify-center p-0 shadow-sm">
            {/* Top Left Circle Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-stone-200/50 rounded-br-[100px]"></div>
            {/* Bottom Right Circle Decoration */}
            {/* <div className="absolute bottom-4 right-4 w-16 h-16 border border-black/80 rounded-full bg-transparent z-20"></div> */}

            <img
              src={riza}
              alt="Muhammad Riza Nursyaban"
              className="relative z-10 w-full h-[95%] object-cover object-top drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
