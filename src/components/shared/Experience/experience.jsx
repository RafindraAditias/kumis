import React from 'react';
import { Building2 } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    date: "Aug 2025 – Dec 2025",
    title: "Research Assistant",
    company: "Bandung Regency Tourism Development Study (UPI – BAPPERIDA)",
    location: "Bandung, Indonesia",
    descriptions: [
      "Conducted 32 in-depth stakeholder interviews and administered surveys to 350 respondents, generating insights on demand patterns, consumer behavior, and regional market potential.",
      "Synthesized qualitative and quantitative findings into structured analytical outputs, identifying socio-economic patterns and behavioral drivers relevant to policy planning.",
      "Contributed to policy briefs and insight reports, translating research findings into actionable recommendations."
    ]
  },
  {
    id: 2,
    date: "Jan 2024 – May 2025",
    title: "Editorial Assistant",
    company: "Jurnal SABA: Journal of Tourism Research – UPI Bandung",
    location: "Bandung, Indonesia",
    descriptions: [
      "Supported manuscript screening and verification by assessing content quality, topic relevance, citation accuracy, and adherence to journal guidelines.",
      "Conducted preliminary reviews to ensure document completeness, formatting consistency, and identify potential plagiarism.",
      "Coordinated with editors and the editorial team to streamline editing, revision, and publication processes in accordance with established standards and timelines."
    ]
  },
  {
    id: 3,
    date: "September 2023 – February 2025",
    title: "Tour Leader",
    company: "Akar Wisata Tour & Travel",
    location: "Bandung, Indonesia",
    descriptions: [
      "Led and managed tour operations from departure to return, ensuring the itinerary ran smoothly and on schedule.",
      "Acted as the main liaison between participants, vendors, and stakeholders including hotels, transport providers, and attractions to maintain service quality.",
      "Provided destination insights, handled participant needs and complaints, and ensured a safe, comfortable, and memorable travel experience."
    ]
  },
  {
    id: 4,
    date: "Sept 2024 – Jan 2025",
    title: "Research Assistant",
    company: "Tourism Research Group Development Program – UPI Bandung",
    location: "Bandung, Indonesia",
    descriptions: [
      "Supported a research project on Generation Z and environmental responsibility, resulting in a Scopus Q1 publication in Tourism Recreation Research.",
      "Assisted in literature reviews, Focus Group Discussion (FGD) coordination, and qualitative data collection.",
      "Conducted thematic coding and qualitative analysis, contributing to analytical sections of the research paper."
    ]
  },
  {
    id: 5,
    date: "Sept 2023 – Mar 2024",
    title: "Social Media Marketing",
    company: "Akar Wisata Tour & Travel",
    location: "Bandung, Indonesia",
    descriptions: [
      "Designed and managed daily content strategies across Instagram, Facebook, and TikTok to increase brand awareness and engagement.",
      "Produced persuasive copywriting and visual materials including photos and short videos to support digital campaigns.",
      "Analyzed content performance using insights data to optimize campaign effectiveness."
    ]
  },
  {
    id: 6,
    date: "Sept 2023 – Mar 2024",
    title: "Enumerator",
    company: "Street Food Vendor Research Project – UPI Bandung",
    location: "Bandung, Indonesia",
    descriptions: [
      "Contributed to a mixed-methods research project published in a Scopus Q1 journal.",
      "Conducted 30 in-depth interviews and coordinated survey data collection from 300 respondents.",
      "Managed data transcription, documentation, and preliminary analysis to ensure data accuracy and methodological transparency."
    ]
  },
  {
    id: 7,
    date: "June 2021 – Sept 2022",
    title: "Sales & Marketing",
    company: "RHMT Production",
    location: "Cianjur, Indonesia",
    descriptions: [
      "Drove sales performance by identifying market opportunities and executing targeted sales strategies.",
      "Developed customized product concepts aligned with customer needs to enhance satisfaction and retention.",
      "Built and maintained strong client relationships, leading negotiations to secure profitable deals and long-term partnerships."
    ]
  },
  {
    id: 8,
    date: "Aug 2024 – Jan 2025",
    title: "Marketing Intern",
    company: "Kiara Artha Park",
    location: "Bandung, Indonesia",
    descriptions: [
      "Supported event-based projects including festivals, concerts, and exhibitions, ensuring smooth coordination from planning to execution.",
      "Assisted in internal and external stakeholder communication, including tenants, visitors, and partners.",
      "Delivered clear information and handled administrative coordination to support operational effectiveness and public engagement."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 tracking-tight">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-200 ml-4 md:ml-10">
            {experienceData.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-12 last:pb-0 group">
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-black group-hover:scale-125 transition-transform duration-300"></div>

                <div className="md:flex-row gap-4 md:gap-8 items-start ">
                  <div className="shrink-0">
                    <span className="bg-black text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap tracking-wide">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex-1 my-5">
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
                          <span className="text-gray-300 text-[8px] leading-none shrink-0">●</span>
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