import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { useState } from "react";

init("user_95agqqx0TacSl819iLfB8");
export default function ContactMain() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nzkf0ej",
        "template_5rr81me",
        e.target,
        "user_95agqqx0TacSl819iLfB8"
      )
      .then(
        (data) => {
          console.log(data.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contactMain" data-aos="fade-up">
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
      <form className="contactMainSub2" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="inputBox"
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          className="inputBox"
          name="email"
        />
        <textarea
          placeholder="Message"
          className="inputBox"
          rows={5}
          name="message"
        />
        <button className="button buttonPrimary boxShadow" type="submit">
          Submit <img src="/icons/Message.svg" className="buttonImg" />
        </button>
      </form>
    </div>
  );
}
