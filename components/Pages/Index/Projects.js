import Layout from "../../layouts/Layout";
import { useEffect, useState } from "react";
import Image from "next/dist/client/image";
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
          <img
            src={`${data.imgSrc}`}
            className="projectMainImg"
            alt="Project"
          />
          <div className="swiperCardMainContent">
            <h2>{data.name}</h2>
            <h2>
              {data.stack.map((data) => {
                return data;
              })}
            </h2>
            <a
              href={data.liveLink}
              target="blank"
              className="button buttonPrimary"
            >
              Live Preview
              <Image
                src="/icons/ArrowTopRight.svg"
                className="buttonImg"
                alt="Arrow"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Layout>
      <div className="project" id="project">
        <div className="projectSub1">
          <div className="projectSub1Main" data-aos="slide-right">
            <div className="subHeading">
              <h2>मेरा काम</h2>
            </div>
            <h1>My Project at a Glance</h1>
            <p>
              I will let the work I&apos;ve done speak for me - &quot;Corrine
              Brown&quot;
            </p>
          </div>
          <Image
            src="/website.png"
            data-aos="fade-up"
            height={400}
            width={500}
            alt="Website"
          />
        </div>
        <div className="projectSub2">
          <div className="projectsTopDiv" data-aos="slide-up">
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
