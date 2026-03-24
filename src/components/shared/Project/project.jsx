import React, { useState } from "react";
import rizaImg from "@/assets/riza.png";
import satu from "@/assets/1.webp";

const projectsData = [
  {
    id: 1,
    title:
      "Research Article - Generation Z's Perspectives on environmental responsibility in tourism and hospitality careers",
    description: "Universitas Pendidikan Indonesia",
    category: "Research",
    image: satu,
  },
];

const categories = ["All", "Research", "Marketing", "Event"];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            A collection of my recent work, side projects, and experiments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-[#0f0f43] text-white border-black"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl mb-5 bg-gray-100 aspect-[4/3] border border-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Container */}
              <div className="flex justify-between items-start text-pretty">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 capitalize tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {project.description}
                  </p>
                </div>
                {/* <div className="shrink-0">
                  <span className="text-[10px] font-semibold tracking-wider uppercase bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
