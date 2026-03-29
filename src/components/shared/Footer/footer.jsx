import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f0f43] font-sans overflow-hidden py-9 px-8 md:px-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 w-full">
        
        {/* Left Side: Text and Contact */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold text-zinc-50 tracking-wide font-sans">
              Get in Touch
            </h2>
            <p className="text-zinc-500 text-[15px] font-light tracking-wide max-w-sm">
              For business and partnership inquiry please contact me below!
            </p>
          </div>
          
          <div className="flex flex-col gap-3 w-full pt-4">
            {/* Phone */}
            <div className="flex items-center gap-6 group cursor-pointer transition-transform duration-300 hover:translate-x-1">
              <div className="w-[50px] h-[50px] shrink-0 rounded-full border border-zinc-500 flex items-center justify-center transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] bg-zinc-900/40">
                <Phone className="text-zinc-50 group-hover:text-purple-400 transition-colors" size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 text-sm font-light">Phone</span>
                <span className="text-zinc-200 text-base font-medium tracking-wide">+62 851-5652-3533</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6 group cursor-pointer transition-transform duration-300 hover:translate-x-1">
              <div className="w-[50px] h-[50px] shrink-0 rounded-full border border-zinc-500 flex items-center justify-center transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] bg-zinc-900/40">
                <Mail className="text-zinc-50 group-hover:text-purple-400 transition-colors" size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 text-sm font-light">Email</span>
                <span className="text-zinc-200 text-base font-medium tracking-wide">rizasyaban04@gmail.com</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-6 group cursor-pointer transition-transform duration-300 hover:translate-x-1">
              <div className="w-[50px] h-[50px] shrink-0 rounded-full border border-zinc-500 flex items-center justify-center transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] bg-zinc-900/40">
                <MapPin className="text-zinc-50 group-hover:text-purple-400 transition-colors" size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 text-sm font-light">Address</span>
                <span className="text-zinc-200 text-base font-medium tracking-wide leading-relaxed max-w-sm">
                  Cisalak, Cibeber, Cianjur, Jawa Barat 43262
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Decorative Vectors */}
        <div className="hidden md:flex w-1/2 absolute right-0 top-0 h-full items-center justify-end pointer-events-none opacity-90 select-none">
          <svg className="w-full h-[120%] -mr-10 min-h-[500px]" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* Small Triangle (Silver) */}
            <path d="M 320 140 L 350 120 L 350 160 Z" stroke="#d4d4d8" strokeWidth="1.5" strokeLinejoin="round" className="animate-pulse" style={{ animationDuration: '4s' }} />
            
            {/* Medium Triangle (Purple) */}
            <path d="M 350 210 L 390 185 L 390 235 Z" stroke="#a855f7" strokeWidth="2.5" strokeLinejoin="round" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
            
            {/* Circle */}
            <circle cx="480" cy="330" r="14" stroke="#d4d4d8" strokeWidth="1.5" />
            
            {/* Smooth Top-Right sweeping curve */}
            <path d="M 600 80 C 500 80, 520 280, 500 320" stroke="#a1a1aa" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5" />
            
            {/* Sharp inner curve down */}
            <path d="M 640 50 C 550 50, 560 250, 560 300 C 560 330, 530 350, 510 350" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Lower small swoop under circle */}
            <path d="M 540 330 C 530 350, 520 365, 495 365" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Lower left swoop from circle area */}
            <path d="M 450 330 C 370 330, 360 390, 340 450" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
