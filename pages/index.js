import Experience from "../components/Pages/Experience";
import Hero from "../components/Pages/Hero";
import Projects from "../components/Pages/Projects";
import Services from "../components/Pages/Services";
import Skills from "../components/Pages/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        style={{
          backgroundColor: "var(--primary-color)",
        }}
      >
        <Services />
      </div>
      <Experience />
      <div
        style={{
          backgroundColor: "var(--primary-color)",
        }}
      >
        <Skills />
      </div>
      <Projects />
    </>
  );
}
