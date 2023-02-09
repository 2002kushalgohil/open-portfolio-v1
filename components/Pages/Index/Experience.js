import { useState } from "react";
import experience from "../../../Data/experience";
import Layout from "../../layouts/Layout";
import Image from "next/image";
import ExperienceDetails from "../Reusable/ExperienceDetails";
import Modal from "../Reusable/Modal";
export default function Experience() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentExperience, setCurrentExperience] = useState({});

  return (
    <>
      <Layout>
        <div className="experience" id="experience">
          <div className="experienceSub1">
            {experience.map((data, index) => {
              return (
                <div
                  key={index}
                  className="experienceCard borderTop"
                  data-aos="slide-right"
                >
                  <div className="experienceCardTopLeft">
                    <p>{data.date}</p>
                  </div>
                  <div className="experienceCardTopRight">
                    <div>
                      <h2>{data.position}</h2>
                      <p>{data.company}</p>
                    </div>
                    <button
                      className="button buttonRoundPrimary boxShadow"
                      onClick={() => {
                        setCurrentExperience(data);
                        setIsModalVisible(true);
                      }}
                    >
                      <Image
                        src="/icons/ArrowTopRight.svg"
                        className="buttonImg"
                        alt="Arrow"
                        width={25}
                        height={25}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="experienceSub2">
            <div className="experienceSub2Main" data-aos="slide-up">
              <div className="subHeading">
                <h2>अनुभव</h2>
              </div>
              <h1>Experience</h1>
              <p>
                Experienced in building landing pages, internal portals, UI
                components, and APIs. Proven track record of increasing revenue,
                improving efficiency, and saving time for the team.
              </p>
            </div>
            <Image
              src="/myImg.webp"
              data-aos="fade-up"
              height={500}
              width={500}
              alt="Kushal"
            />
          </div>
        </div>
      </Layout>
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <ExperienceDetails data={currentExperience} />
      </Modal>
    </>
  );
}
