import skills from "../../../Data/skills";
import Layout from "../../layouts/Layout";

export default function Skills() {
  return (
    <Layout>
      <div className="skills" id="skills">
        <div className="skillsSubDiv1" data-aos="slide-up">
          <div className="subHeading">
            <h2>कौशल</h2>
          </div>
          <h1>Skills</h1>
          <p>
            Languages,Technologies and tools that I have learned and applied to
            my projects
          </p>
        </div>
        <div className="skillsSubDiv2">
          {skills.map((data, index) => {
            return (
              <div key={index} className="skillsCard" data-aos="slide-up">
                <img src={data.imgSrc} alt="skills"/>
                <h2>{data.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
