import React, { useState } from "react";
import satu from "@/assets/1.webp";
import dua from "@/assets/dua.png";
import empat from "@/assets/empat.png";
import tiga from "@/assets/tiga.jpg";
import lima from "@/assets/lima.jpeg";
import jazz from "@/assets/jaz.png";
import policy from "@/assets/policy.jpeg";

const projectsData = [
  {
    id: 1,
    title:
      "Research Article - Generation Z's Perspectives on environmental responsibility in tourism and hospitality careers",
    description: "Universitas Pendidikan Indonesia",
    category: "Research",
    image: satu,
    link: "",
  },
  {
    id: 2,
    title:
      "Editorial Assistant for SABA: Journal of Tourism Research (SINTA-Indexed Journal)",
    description:
      "Tourism Marketing Management – Universitas Pendidikan Indonesia",
    category: "Research",
    image: dua,
    link: "https://ejournal.upi.edu/index.php/sabajournal",
  },
  {
    id: 3,
    title:
      "Research Assistant – Contributed to policy brief and research article on Bandung Regency Tourism Development",
    description:
      "Bapperida Kabupaten Bandung & Universitas Pendidikan Indonesia (Collaborative Project)",
    category: "Research",
    image: empat,
    link: "https://drive.google.com/file/d/1KMGHhQqSTMndm914Tb6uTqQgQnp-eovK/view?usp=sharing",
  },
  {
    id: 4,
    title:
      "Research Enumerator – Contributed to research article: “Hospitality on the Streets: A Mixed-Method Study of Indonesian Street Food Micro-Enterprises”",
    description: "International Research Project (Independent)",
    category: "Research",
    image: tiga,
    link: "https://ejournal.upi.edu/index.php/sabajournal",
  },
  {
    id: 5,
    title: "Social Media Marketing - Instagram @akarwisatakhatulistiwa",
    description: "Akar Wisata Tour & Travel",
    category: "Marketing",
    image: lima,
    link: "https://www.instagram.com/akarwisatakhatulistiwa/",
  },
  {
    id: 6,
    title:
      "Policy Brief & Infographic – Regenerative Tourism Study in Bandung Regency",
    description: "Universitas Pendidikan Indonesia",
    category: "Research",
    image: policy,
    link: "https://drive.google.com/file/d/19Ndr9UiwEOALBLXxvDGaPM_JP6xPa9YJ/view?usp=sharing",
  },
  {
    id: 7,
    title: "Social Media Content – Instagram @tpjazzfest",
    description: "The Papandayan Jazz Festival",
    category: "Event",
    image: jazz,
    link: "https://www.instagram.com/reel/DB1D6pORZOL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
              {/* <div className="relative overflow-hidden rounded-xl mb-5 bg-gray-100 aspect-[4/3] border border-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div> */}

              {/* Text Container */}
              <div className="flex text-pretty">
                <div className="flex-1 ">
                  <div className="relative overflow-hidden rounded-xl mb-5 bg-gray-100 aspect-[4/3] border border-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 capitalize tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 pb-3">
                    {project.description}
                  </p>
                  <span className="">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-xs text-white px-5 hover:bg-grey-400 bg-[#0f0f43] py-2 rounded-full my-10"
                    >
                      View Project
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
