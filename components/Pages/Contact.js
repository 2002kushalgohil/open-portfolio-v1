import Layout from "../layouts/Layout";
// make it reusable
export default function Contact() {
  return (
    <Layout>
      <div className="contact">
        <div className="contactMain">
          <div className="contactMainSub1">
            <div className="contactMainSub1Main">
              <div className="subHeading">
                <h2>मुझसे संपर्क करें</h2>
              </div>
              <h1>Let's Discuss Your Project</h1>
              <p>
                Feel free to contact me for career prospects, business services,
                and other professional inquiries!
              </p>
            </div>
            <ul className="contactIconsMainDiv">
              <a href="mailto:2002kushalgohil@gmail.com">
                <img src="/Email.svg" />
                <p>2002kushalgohil@gmail.com</p>
              </a>
              <a href="tel:+917040099240">
                <img src="/Phone.svg" />
                <p>+91 7040099240</p>
              </a>
              <a
                href="https://www.linkedin.com/in/2002kushalgohil/"
                target="blank"
              >
                <img src="/LinkedIn.svg" />
                <p>2002kushalgohil</p>
              </a>
              <a href="https://github.com/2002kushalgohil" target="blank">
                <img src="/GitHub.svg" />
                <p>2002kushalgohil</p>
              </a>
            </ul>
          </div>
          <div className="contactMainSub2">
            <input type="text" placeholder="Name" className="inputBox" />
            <input type="email" placeholder="Email" className="inputBox" />
            <textarea placeholder="Message" className="inputBox" rows={5} />
            <button className="button buttonPrimary">
              Let's talk <img src="/Message.svg" className="buttonImg" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
