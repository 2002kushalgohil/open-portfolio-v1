import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { useState } from "react";

init("user_95agqqx0TacSl819iLfB8");
export default function ContactMain() {
  const [btnText, setBtnText] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    message: "Successfull",
    bgColor: "green",
    status: "none",
  });
  5;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBtnText("Submitting...");
    setIsLoading(true);
    setMessage({
      message: "Sending...",
      bgColor: "blue",
      status: "",
    });
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log(name);
    console.log(email);
    console.log(message);

    if (!email || !name || !message) {
      setMessage({
        message: "Please fill all the fields",
        bgColor: "blue",
        status: "",
      });
      setTimeout(() => {
        setMessage({ ...message, status: "none" });
      }, 3000);
      setBtnText("Submit");
      setIsLoading(false);
      return;
    }
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
          setBtnText("Submit");
          setIsLoading(false);
          setMessage({
            message: "Message sent successfully",
            bgColor: "green",
          });

          setTimeout(() => {
            setMessage({ ...message, status: "none" });
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setBtnText("Submitting");
          setIsLoading(false);
          setMessage({
            message: "Something went wrong ",
            bgColor: "red",
          });

          setTimeout(() => {
            setMessage({ ...message, status: "none" });
          }, 5000);
        }
      );
  };
  return (
    <div className="contactMain">
      <div className="contactMainSub1">
        <div className="contactMainSub1Main">
          <div className="subHeading" data-aos="flip-up">
            <h2>मुझसे संपर्क करें</h2>
          </div>
          <h1 data-aos="flip-up">Let&apos;s Discuss Your Project</h1>
          <p data-aos="flip-up">
            Feel free to contact me for career prospects, business services, and
            other professional inquiries!
          </p>
          <button
            data-aos="flip-up"
            className="button buttonPrimary"
            onClick={() => {
              window.open("./Resume.pdf", "_blank");
            }}
          >
            Resume <img src="/icons/Download.svg" className="buttonImg" />
          </button>
        </div>
        <ul className="contactIconsMainDiv" data-aos="flip-up">
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
      <form
        className="contactMainSub2"
        onSubmit={handleFormSubmit}
        data-aos="slide-up"
      >
        <div
          className="contactMessageDiv"
          style={{
            backgroundColor: message.bgColor,
            display: message.status,
          }}
        >
          {message.message}
        </div>
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
        <button
          className={`button buttonPrimary boxShadow ${
            isLoading ? "btnLoading" : ""
          }`}
          type="submit"
          disabled={isLoading}
        >
          {btnText} <img src="/icons/Message.svg" className="buttonImg" />
        </button>
      </form>
    </div>
  );
}
