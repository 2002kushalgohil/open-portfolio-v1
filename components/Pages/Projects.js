import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const fullStack = "Full Stack";
const uiDevelopment = "UI Development";
const webDesign = "Web Design";

const projects = [
  {
    name: "Expense Tracker",
    imgSrc: "expense tracker.jpg",
    category: fullStack,
  },
  {
    name: "Google Keep",
    imgSrc: "google keep.jpg",
    category: fullStack,
  },
  {
    name: "Headphone UI",
    imgSrc: "demo.png",
    category: uiDevelopment,
  },
  {
    name: "Restaurant UI",
    imgSrc: "Restaurant UI.jpg",
    category: uiDevelopment,
  },
  {
    name: "Restaurant Design",
    imgSrc: "Restaurant Design.png",
    category: webDesign,
  },
  {
    name: "Footware Design",
    imgSrc: "Footware Design.jpg",
    category: webDesign,
  },
];

export default function Projects() {
  const category = [fullStack, uiDevelopment, webDesign];
  const [currCategory, setCurrCategory] = useState(fullStack);
  const [displayProject, setDisplayProject] = useState(projects);

  const categoryProjectSetter = () => {
    const data = projects.filter((data) => data.category == currCategory);
    setDisplayProject(data);
  };

  useEffect(() => {
    categoryProjectSetter();
  }, [currCategory]);
  return (
    <Layout>
      <div className="project">
        <div className="projectSub1">
          <div className="projectSub1Main">
            <div className="subHeading">
              <h2>मेरा काम</h2>
            </div>
            <h1>My Project at a Glance</h1>
            <p>I will let the work I've done speak for me - "Corrine Brown"</p>
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
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            spaceBetween={100}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiperDiv"
          >
            {displayProject.map((data, index) => {
              return (
                <SwiperSlide key={index} className="swiperCard">
                  <div className="swiperCardMain">
                    <img
                      src={`/Projects/${data.imgSrc}`}
                      className="projectMainImg"
                    />
                    <div className="swiperCardMainContent">
                      <div>
                        <h2>{data.name}</h2>
                        <p> (Case Study)</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}
