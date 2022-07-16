import Layout from "../../layouts/Layout";

export default function Hero({ setIsModalVisible }) {
  return (
    <Layout>
      <div className="home">
        <div className="homeSubDiv1">
          <div className="homeSubDiv1MainSection">
            <div className="subHeading">
              <h2>मेरा परिचय</h2>
            </div>
            <h1>Hello, my name&apos;s Kushal. I&apos;m a Full Stack Developer.</h1>
            <p>
              A Full-Stack developer with Innovative ideas a team player and
              passionate about coding.
            </p>
            <button
              className="button buttonPrimary"
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              Let&apos;s Talk <img src="/icons/Message.svg" className="buttonImg" />
            </button>
          </div>
        </div>
        <div className="homeSubDiv2">
          <img src="/heroImg.gif" className="heroImg" />
        </div>
      </div>
    </Layout>
  );
}
