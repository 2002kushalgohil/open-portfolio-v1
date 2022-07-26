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
              I help an ambitious business like yours generate more profits by
              building awareness, driving web traffic, connecting with
              customers, and growing overall sales.
            </p>
          </div>
          <Image
            src="/service.png"
            data-aos="fade-up"
            height={550}
            width={500}
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
