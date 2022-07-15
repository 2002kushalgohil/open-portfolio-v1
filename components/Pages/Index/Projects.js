import Layout from "../../layouts/Layout";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import projects, { category, fullStack } from "../../../Data/projects";
import SwiperComponent from "../Reusable/SwiperComponent";
export default function Projects() {
  const [currCategory, setCurrCategory] = useState(fullStack);
  const [displayProject, setDisplayProject] = useState(projects);

  useEffect(() => {
    const data = projects.filter((data) => data.category == currCategory);
    setDisplayProject(data);
  }, [currCategory]);

  const swiperCardBlock = displayProject.map((data, index) => {
    return (
      <SwiperSlide key={index} className="swiperCard">
        <div className="swiperCardMain">
          <img src={`/Projects/${data.imgSrc}`} className="projectMainImg" />
          <div className="swiperCardMainContent">
            <div>
              <h2>{data.name}</h2>
              <p> (Case Study)</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Layout>
      <div className="project">
        <div className="projectSub1">
          <div className="projectSub1Main">
            <div className="subHeading">
              <h2>मेरा काम</h2>
            </div>
            <h1>My Project at a Glance</h1>
            <p>I will let the work I&apos;ve done speak for me - &quot;Corrine Brown&quot;</p>
          </div>
          <img src="/website.png" />
        </div>
        <div className="projectSub2">
          <div className="projectsTopDiv">
            {category.map((data, index) => {
              return (
                <p
                  onClick={() => {
                    setCurrCategory(data);
                  }}
                  key={index}
                  className={`${currCategory == data ? `active` : ""}`}
                >
                  {data}
                </p>
              );
            })}
          </div>
          <SwiperComponent swiperCardBlock={swiperCardBlock} />
        </div>
      </div>
    </Layout>
  );
}
