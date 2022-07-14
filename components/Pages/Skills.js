import Layout from "../layouts/Layout";
export default function Skills() {
  const skills = [
    {
      imgSrc: "/skills/1 Html.svg",
      name: "HTML5",
    },
    {
      imgSrc: "/skills/2 Css.svg",
      name: "CSS3",
    },
    {
      imgSrc: "/skills/3 Tailwind Css.svg",
      name: "Tailwind",
    },
    {
      imgSrc: "/skills/4 Ant Design.svg",
      name: "Ant Design",
    },
    {
      imgSrc: "/skills/5 Figma.svg",
      name: "Figma",
    },
    {
      imgSrc: "/skills/6 JavaScript.svg",
      name: "JavaScript",
    },
    {
      imgSrc: "/skills/7 TypeScript.svg",
      name: "TypeScript",
    },
    {
      imgSrc: "/skills/8 React JS.svg",
      name: "React JS",
    },
    {
      imgSrc: "/skills/9 Next JS.svg",
      name: "Next JS",
    },
    {
      imgSrc: "/skills/10 Redux.svg",
      name: "Redux",
    },
    {
      imgSrc: "/skills/11 Node JS.svg",
      name: "Node JS",
    },
    {
      imgSrc: "/skills/12 Express JS.svg",
      name: "Express JS",
    },
    {
      imgSrc: "/skills/13 Nest JS.svg",
      name: "Nest JS",
    },
    {
      imgSrc: "/skills/14 MongoDB.svg",
      name: "MongoDB",
    },
    {
      imgSrc: "/skills/15 MySQL.svg",
      name: "MySQL",
    },
  ];
  return (
    <Layout>
      <div className="skills">
        <div className="skillsSubDiv1">
          <h1>Skills</h1>
          <p>
            Languages,Technologies and tools that I have learned and applied to
            my projects
          </p>
        </div>
        <div className="skillsSubDiv2">
          {skills.map((data, index) => {
            return (
              <div key={index} className="skillsCard">
                <img src={data.imgSrc} />
                <h2>{data.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
