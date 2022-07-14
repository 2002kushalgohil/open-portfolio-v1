import Experience from "../components/Pages/Experience";
import Hero from "../components/Pages/Hero";
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
    </>
  );
}
