import Layout from "../layouts/Layout";
export default function Experience() {
  const experience = [
    {
      date: "11/2021 - Present",
      position: "Full-Stack Developer intern",
      company: "Bridged Media",
    },
    {
      date: "08/2021 - 10/2021",
      position: "Full-Stack Developer intern",
      company: "Conscience Journal",
    },
    {
      date: "07/2020 - 01/2021",
      position: "Customer Care Executive",
      company: "KisanKonnect",
    },
    {
      date: "02/2090 - 06/2020",
      position: "Personal goal pursuit",
      company: "Career Break",
    },
    {
      date: "07/2017 - 01/2019",
      position: "Founder",
      company: "Indian Tech",
    },
  ];
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
                    <img src="/ArrowTopRight.svg" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="experienceSub2">
          <div className="experienceSub2Main">
            <div className="subHeading">
              <h2>Experience</h2>
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
