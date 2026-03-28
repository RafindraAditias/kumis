import React from 'react';
import { Search, Megaphone, BrainCircuit, PenTool } from 'lucide-react';

const skillsData = [
  {
    id: 1,
    title: "Research Skills",
    icon: Search,
    iconColor: "text-blue-600 bg-blue-50",
    hoverClass: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200",
    skills: [
      "Qualitative Data Analysis (Thematic & Insight-Driven)",
      "Quantitative Data Analysis (Survey-Based)",
      "Structural Equation Modeling (SEM – Basic to Intermediate)",
      "Research Design & Methodology Structuring",
      "Academic Writing (Journal & Research Reports)",
      "Data Interpretation for Decision-Making",
      "Stakeholder Mapping & Analysis"
    ]
  },
  {
    id: 2,
    title: "Marketing Skills",
    icon: Megaphone,
    iconColor: "text-rose-600 bg-rose-50",
    hoverClass: "hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200",
    skills: [
      "Digital Marketing Strategy (Insight-Based Approach)",
      "Social Media Content Planning & Execution",
      "Basic Performance Marketing (Ads & Campaign Monitoring)",
      "Copywriting (Clear & Persuasive)",
      "Audience Segmentation & Targeting",
      "Marketing Data Analysis (KPI Tracking & Evaluation)",
      "Consumer Insight Analysis"
    ]
  },
  {
    id: 3,
    title: "Core Competencies",
    icon: BrainCircuit,
    iconColor: "text-emerald-600 bg-emerald-50",
    hoverClass: "hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200",
    skills: [
      "Analytical Thinking (Data-Driven Approach)",
      "Critical Thinking in Problem Solving",
      "Effective Written & Verbal Communication",
      "Collaborative Teamwork",
      "Project Coordination & Execution",
      "Time Management & Task Prioritization",
      "Attention to Detail"
    ]
  },
  {
    id: 4,
    title: "Tools & Software",
    icon: PenTool,
    iconColor: "text-amber-600 bg-amber-50",
    hoverClass: "hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200",
    skills: [
      "Nvivo (Qualitative Data Coding & Analysis)",
      "SPSS (Statistical Analysis & Basic SEM)",
      "Microsoft Excel / Google Sheets (Data Processing & Analysis)",
      "Microsoft Word / Google Docs (Academic Writing)",
      "Canva (Visual Content Creation)",
      "Meta Ads Manager (Basic Campaign Setup & Monitoring)",
      "Google Analytics (Basic Performance Tracking)"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-slate-50/50 py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full font-semibold text-sm tracking-wide mb-4">
            EXPERTISE & CAPABILITIES
          </span>
          <h2 className=" text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Professional Skill
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A comprehensive overview of my technical abilities and professional competencies across research, marketing, and analytical tools.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {skillsData.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id} 
                className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-1"
              >
                {/* Card Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div className={`w-14 rounded-2xl ${category.iconColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className={`px-4 py-2.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-100 transition-colors duration-300 cursor-default ${category.hoverClass}`}
                    >
                      {skill}
                    </span>
                  ))}
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