import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

// enter your own web3 forms access key below

    formData.append("access_key", "xxxxxxxxxxxxxxxxxxxxxxxx");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
    
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        {/* Section Heading */}
        <h2 className="text-center mb-16text-center text-4xl text-white">
          Get In Touch
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I'm open to new collaborations, internships, or exciting project opportunities. If you have an idea, a question, or just want to connect, feel free to reach out! Let's build something great together—I'm always happy to discuss your goals and help turn your vision into reality.
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
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
