import Layout from "../../layouts/Layout";
import Image from "next/image";
export default function Hero({ setIsModalVisible }) {
  return (
    <Layout>
      <div
        className="home"
        id="home"
        style={{
          position: "relative",
        }}
      >
        <div className="homeSubDiv1">
          <div className="homeSubDiv1MainSection">
            <div className="subHeading" data-aos="flip-down">
              <h2>मेरा परिचय</h2>
            </div>
            <h1 data-aos="flip-up">
              Hello, my name&apos;s Kushal. I&apos;m a Full Stack Developer.
            </h1>
            <p data-aos="flip-down">
              Experienced in building robust web applications, creating
              immersive games, and implementing innovative IoT solutions. Let's
              collaborate to deliver exceptional web experiences!
            </p>
            <button
              data-aos="flip-up"
              className="button buttonPrimary"
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              Let&apos;s Talk{" "}
              <Image
                src="/icons/Message.svg"
                className="buttonImg"
                alt="Message"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
        <div
          className="homeSubDiv2"
          style={{
            position: "relative",
          }}
        >
          <Image
            src="/hero.svg"
            data-aos="slide-down"
            height={800}
            width={800}
            className="heroImg"
            alt="Hero"
          />
        </div>
        <img src="/Etc/head.png" className="etcImg etcImg1" />
        <img src="/Etc/object.png" className="etcImg etcImg2" />
      </div>
    </Layout>
  );
}
