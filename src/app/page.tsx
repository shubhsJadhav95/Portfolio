import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/about";
import SkillsSection from "./components/skills";
import Projects from "./components/project";
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <SkillsSection/>
    <Projects/>
    <Footer/>
    </>
  );
}
