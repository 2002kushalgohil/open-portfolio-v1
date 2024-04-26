import Head from "next/head";
import Script from "next/script";
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

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 0,
    });
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Head>
        <title>Kushal Gohil - Full Stack Developer</title>
        <meta name="title" content="Kushal Gohil - Full Stack Developer" />
        <meta name="theme-color" content="#fcda69" />
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

        <meta
          property="og:title"
          content="Kushal Gohil - Full Stack Developer"
        />
        <meta property="og:type" content="Portfolio" />
        <meta
          property="og:image"
          content="/favicon/android-chrome-512x512.png"
        />
        <meta property="og:url" content="https://www.kushalgohil.com" />
        <meta
          name="twitter:card"
          content="Skilled in designing, developing, and deploying software containing logical solutions to business problems."
        />

        <meta
          property="og:description"
          content="Skilled in designing, developing, and deploying software containing logical solutions to business problems."
        />
        <meta
          property="og:site_name"
          content="Kushal Gohil - Full Stack Developer"
        />
        <meta
          name="twitter:image:alt"
          content="/favicon/android-chrome-512x512.png"
        />
      </Head>

      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-K8CZ77F3MJ"
      />

      <Script strategy="lazyOnload" id="my-script">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K8CZ77F3MJ');`}
      </Script>

      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <ContactMain />
      </Modal>
      <Hero setIsModalVisible={setIsModalVisible} />
      <div className="oddSection">
        <Services />
      </div>
      <Experience />
      <div className="oddSection">
        <Skills />
      </div>
      <Projects />
      <div className="oddSection">
        <Contact />
      </div>
    </>
  );
}
