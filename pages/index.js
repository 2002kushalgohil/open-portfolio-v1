import Head from "next/head";
import { useEffect, useState } from "react";
import Contact from "../components/Pages/Index/Contact";
import Experience from "../components/Pages/Index/Experience";
import Hero from "../components/Pages/Index/Hero";
import Projects from "../components/Pages/Index/Projects";
import Services from "../components/Pages/Index/Services";
import Skills from "../components/Pages/Index/Skills";
import ContactMain from "../components/Pages/Reusable/ContactMain";
import Modal from "../components/Pages/Reusable/Modal";
import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/Pages/Reusable/NavBar";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 0,
    });
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mode, setMode] = useState("");
  return (
    <div className={mode}>
      <Head>
        <title>Kushal Gohil - Full Stack Developer</title>
        <meta name="title" content="Kushal Gohil - Full Stack Developer" />
        <meta
          name="description"
          content="Skilled in designing, developing, and deploying software containing logical solutions to business problems."
        />
        <meta
          name="keywords"
          content="Kushal Gohil , Full Stack Developer, Kushal Gohil - Full Stack Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Kushal Gohil" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <NavBar mode={mode} setMode={setMode} />
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <ContactMain />
      </Modal>
      <Hero setIsModalVisible={setIsModalVisible} />
      <div className="oddSectionColor">
        <Services />
      </div>
      <Experience />
      <div className="oddSectionColor">
        <Skills />
      </div>
      <Projects />
      <div className="oddSectionColor">
        <Contact />
      </div>
    </div>
  );
}
