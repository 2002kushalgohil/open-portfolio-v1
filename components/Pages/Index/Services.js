import services from "../../../Data/services";
import Layout from "../../layouts/Layout";
import Image from "next/image";
export default function Services() {
  return (
    <Layout>
      <div className="services" id="services">
        <div className="servicesSub1">
          <div className="servicesSub1Main" data-aos="slide-up">
            <div className="subHeading">
              <h2>मेरी सेवाएं</h2>
            </div>
            <h1>Services I Offer</h1>
            <p>
              Offering full stack web development services with expertise in
              building dynamic, high-performance websites and applications.
              Additionally, offering music production services with
              industrial-standard tracks of various genres. Bringing passion,
              creativity, and technical expertise to each project.
            </p>
          </div>
          <Image
            src="/services.svg"
            data-aos="fade-up"
            height={600}
            width={600}
            alt="Services"
          />
        </div>
        <div className="servicesSub2">
          {services.map((data, index) => {
            return (
              <div
                key={index}
                className="servicesCard borderTop"
                data-aos="slide-left"
              >
                <h1>
                  {index + 1}. {data.name}
                </h1>
                <div className="servicesCardFooter">
                  <p>Proficiency</p>
                  <h2>{data.proficiency}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
