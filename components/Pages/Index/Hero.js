import Layout from "../../layouts/Layout";

export default function Hero({ setIsModalVisible }) {
  return (
    <Layout>
      <div className="home" id="home">
        <div className="homeSubDiv1">
          <div className="homeSubDiv1MainSection">
            <div className="subHeading" data-aos="flip-down">
              <h2>मेरा परिचय</h2>
            </div>
            <h1 data-aos="flip-up">
              Hello, my name&apos;s Kushal. I&apos;m a Full Stack Developer.
            </h1>
            <p data-aos="flip-down">
              A Full-Stack developer with Innovative ideas a team player and
              passionate about coding.
            </p>
            <button
              data-aos="flip-up"
              className="button buttonPrimary"
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              Let&apos;s Talk{" "}
              <img src="/icons/Message.svg" className="buttonImg" />
            </button>
          </div>
        </div>
        <div className="homeSubDiv2">
          <img src="/heroImg.png" className="heroImg" data-aos="slide-down" />
        </div>
      </div>
    </Layout>
  );
}
