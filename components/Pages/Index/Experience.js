import experience from "../../../Data/experience";
import Layout from "../../layouts/Layout";
export default function Experience() {
  return (
    <Layout>
      <div className="experience">
        <div className="experienceSub1">
          {experience.map((data, index) => {
            return (
              <div key={index} className="experienceCard">
                <div className="experienceCardTopLeft">
                  <p>{data.date}</p>
                </div>
                <div className="experienceCardTopRight">
                  <div>
                    <h2>{data.position}</h2>
                    <p>{data.company}</p>
                  </div>
                  <button className="button buttonRoundPrimary">
                    <img src="/icons/ArrowTopRight.svg" className="buttonImg" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="experienceSub2">
          <div className="experienceSub2Main">
            <div className="subHeading">
              <h2>अनुभव</h2>
            </div>
            <h1>Experience</h1>
            <p>
              Skilled in designing, developing, and deploying software
              containing logical solutions to business problems.
            </p>
          </div>
          <img src="/myImg.png" />
        </div>
      </div>
    </Layout>
  );
}
