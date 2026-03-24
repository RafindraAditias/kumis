import React from 'react';
import { Building2 } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    date: "2025 - 2025",
    title: "Software Engineering COMPFEST17 Academy SEA Certification",
    company: "Indonesia University",
    location: "Jakarta, Indonesia",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ]
  },
  {
    id: 2,
    date: "2025 - 2025",
    title: "Laboratory Assistant of Systems Analysis and Design",
    company: "Faculty of Computer Science (FILKOM) University of Brawijaya",
    location: "Malang, Indonesia",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 tracking-tight">Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-200 ml-4 md:ml-10">
            {experienceData.map((item, index) => (
              <div key={item.id} className="relative pl-8 md:pl-12 pb-16 last:pb-0 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-black group-hover:scale-125 transition-transform duration-300"></div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                  {/* Date Pill */}
                  <div className="mt-1 shrink-0">
                    <span className="bg-black text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap tracking-wide">
                      {item.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className="mt-2.5 flex items-center gap-2 text-sm font-medium text-gray-500">
                      <Building2 className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{item.company} • {item.location}</span>
                    </div>

                    <ul className="mt-5 space-y-3 text-gray-600 text-sm md:text-base list-none">
                      {item.descriptions.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {/* Bullet point that looks like the image: a small gray dot */}
                          <span className="text-gray-300 mt-[7px] text-[8px] leading-none shrink-0">●</span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
