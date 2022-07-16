export default function ContactMain() {
  return (
    <div className="contactMain">
      <div className="contactMainSub1">
        <div className="contactMainSub1Main">
          <div className="subHeading">
            <h2>मुझसे संपर्क करें</h2>
          </div>
          <h1>Let&apos;s Discuss Your Project</h1>
          <p>
            Feel free to contact me for career prospects, business services, and
            other professional inquiries!
          </p>
          <button
            className="button buttonPrimary"
            onClick={() => {
              window.open("./Resume.pdf", "_blank");
            }}
          >
            Resume <img src="/icons/Download.svg" className="buttonImg" />
          </button>
        </div>
        <ul className="contactIconsMainDiv">
          <a href="mailto:2002kushalgohil@gmail.com">
            <img src="/icons/Email.svg" />
            <p>2002kushalgohil@gmail.com</p>
          </a>
          <a href="tel:+917040099240">
            <img src="/icons/Phone.svg" />
            <p>+91 7040099240</p>
          </a>
          <a href="https://www.linkedin.com/in/2002kushalgohil/" target="blank">
            <img src="/icons/LinkedIn.svg" />
            <p>2002kushalgohil</p>
          </a>
          <a href="https://github.com/2002kushalgohil" target="blank">
            <img src="/icons/GitHub.svg" />
            <p>2002kushalgohil</p>
          </a>
        </ul>
      </div>
      <div className="contactMainSub2">
        <input type="text" placeholder="Name" className="inputBox" />
        <input type="email" placeholder="Email" className="inputBox" />
        <textarea placeholder="Message" className="inputBox" rows={5} />
        <button className="button buttonPrimary boxShadow">
          Submit <img src="/icons/Message.svg" className="buttonImg" />
        </button>
      </div>
    </div>
  );
}
