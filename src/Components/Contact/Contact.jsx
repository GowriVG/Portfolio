import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d0e6ed8-fcb8-40e5-9063-fa222ea76e4b");

    //Auto-reply email + Google sheets storage
    formData.append("reply_to", formData.get("email"));
    formData.append("subject", "Thank you for reaching out!");
    formData.append("redirect", "https://web3forms.com/success");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    //alert(res.message);
    setLoading(false);

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thanks for reaching out. I will get back to you soon!",
        background: "#141414", // Dark background
        color: "#ffffff", // White text
        iconColor: "#7C3AED", // Purple tick icon
        confirmButtonText: "OK",
        confirmButtonColor: "#ffffff", // White button background
        customClass: {
          popup: "dark-popup",
          title: "dark-title",
          confirmButton: "dark-confirm-btn",
        },
      });

      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed to send message",
        text: "Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h2
          className="text-4xl tracking-tight text-white"
          style={{
            fontFamily: '"Commissioner", sans-serif',
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          Get In Touch
        </h2>
        <div className="contact-heading-line"></div>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm open to new collaborations, internships, or exciting project
            opportunities. If you have an idea, a question, or just want to
            connect, feel free to reach out! Let's build something great
            together—I'm always happy to discuss your goals and help turn your
            vision into reality.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>gowrivgopal12131@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91-7510294504</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Thiruvananthapuram</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit" onTouchStart={() => {}}>
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
