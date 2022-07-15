import Head from "next/head";
import { useState } from "react";
import Contact from "../components/Pages/Index/Contact";
import Experience from "../components/Pages/Index/Experience";
import Hero from "../components/Pages/Index/Hero";
import Projects from "../components/Pages/Index/Projects";
import Services from "../components/Pages/Index/Services";
import Skills from "../components/Pages/Index/Skills";
import ContactMain from "../components/Pages/Reusable/ContactMain";
import Modal from "../components/Pages/Reusable/Modal";

export default function Home() {
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);
  return (
    <>
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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
      <Modal
        isVisible={isContactModalVisible}
        setIsContactModalVisible={setIsContactModalVisible}
      >
        <ContactMain />
      </Modal>
      <Hero setIsContactModalVisible={setIsContactModalVisible} />
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
      <div
        style={{
          backgroundColor: "var(--primary-color)",
        }}
      >
        <Contact />
      </div>
    </>
  );
}
