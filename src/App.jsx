import Nav from "@/components/shared/navbar/nav";
import Hero from "@/components/shared/Hero/hero";
import About from "./components/shared/About/about";
import Experience from "./components/shared/Experience/experience";
import Project from "./components/shared/Project/project";
import Skills from "./components/shared/Skills/Skills";
import Footer from "./components/shared/Footer/footer";

export default function App() {
  return (
    <div className="bg-[#E5E7EB]">
      <div className="">
        <Nav />
        <div className="">
          <Hero />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
