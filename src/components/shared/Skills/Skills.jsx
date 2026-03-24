import React from 'react';
import { BookOpenText, BetweenHorizontalEnd, ChartArea, ShieldCheck } from 'lucide-react';

const skillsData = [
  {
    id: 1,
    title: "Research Project Coordination",
    description: "We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices.",
    number: "01",
    icon: BookOpenText,
  },
  {
    id: 2,
    title: "Primary Data Collection (FGD, in-depth interviews, surveys)",
    description: "Our team builds reliable, scalable solutions, delivering clean code that powers websites and mobile apps with top-notch performance and security.",
    number: "02",
    icon: BetweenHorizontalEnd,
  },
  {
    id: 3,
    title: "Qualitative Thematic Analysis (coding, pattern identification – NVivo)",
    description: "We design responsive, user-friendly websites that blend aesthetics with functionality, providing a seamless experience across devices and reflecting your brand's identity.",
    number: "03",
    icon: ChartArea,
  },
  {
    id: 4,
    title: "Digital Marketing - BNSP Certified",
    description: "We craft memorable brand identities, from logos to complete strategies, ensuring consistency and a strong connection with your audience across all platforms.",
    number: "04",
    icon: ShieldCheck,
  }
];



const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gray-50/30 py-24 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto gap-12 lg:gap-20">
        
        {/* Top Column - Title */}
        <div className="text-center mb-12 flex flex-col items-center w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            How Can I Assist You?
          </h2>
        </div>

        {/* Right Column - Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.id} 
                className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 border border-gray-100 flex flex-col justify-between min-h-[220px]"
              >
                
                {/* Top Section */}
                <div className="flex items-start gap-4 md:gap-5 mb-8">
                  <div className="w-10 h-10 rounded-full bg-indigo-50/80 flex items-center justify-center shrink-0 text-[#0f0f43]">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end mt-auto pt-4 border-t border-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 capitalize tracking-tight">
                    {skill.title}
                  </h3>
                  <span className="text-base font-bold text-gray-400">
                    {skill.number}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;