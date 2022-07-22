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
      bgColor: "#4c40f7",
      status: "",
    });
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!email || !name || !message) {
      setMessage({
        message: "Please fill all the fields",
        bgColor: "#4c40f7",
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

  const links = [
    {
      href: "mailto:2002kushalgohil@gmail.com",
      src: "/icons/Email.svg",
      text: "2002kushalgohil@gmail.com",
    },
    {
      href: "tel:+917040099240",
      src: "/icons/Phone.svg",
      text: "+91 7040099240",
    },
    {
      href: "https://www.linkedin.com/in/2002kushalgohil/",
      src: "/icons/LinkedIn.svg",
      text: "2002kushalgohil",
    },
    {
      href: "https://github.com/2002kushalgohil",
      src: "/icons/GitHub.svg",
      text: "2002kushalgohil",
    },
  ];
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
        <ul className="contactIconsMainDiv">
          {links.map((data, key) => {
            return (
              <a key={key} href={data.href} data-aos="flip-up" target="blank">
                <img src={data.src} />
                <p>{data.text}</p>
              </a>
            );
          })}
        </ul>
      </div>
      <form
        className="contactMainSub2"
        onSubmit={handleFormSubmit}
        data-aos="fade-up"
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
