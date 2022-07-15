import Layout from "../layouts/Layout";

export default function Services() {
  const services = [
    {
      name: "Full Stack Web Development",
    },
    {
      name: "Website UI Development",
    },
    {
      name: "Web UI/UX Design",
    },
  ];
  return (
    <Layout>
      <div className="services">
        <div className="servicesSub1">
          <div className="servicesSub1Main">
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
          <img src="/service1.png" />
        </div>
        <div className="servicesSub2">
          {services.map((data, index) => {
            return (
              <div key={index} className="servicesCard">
                <h1>
                  {index + 1}. {data.name}
                </h1>
                <div className="servicesCardFooter">
                  <p>Explore</p>
                  <button className="button buttonRoundPrimary">
                    <img src="/ArrowTopRight.svg" className="buttonImg" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
