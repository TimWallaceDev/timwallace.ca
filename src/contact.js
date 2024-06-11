import { block } from "million/react";
import email from "./assets/email.png"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"

const Contact = block(() => {
    return (
        <div className="contact">
            <h3 className="contact__heading">Let's get in touch!</h3>

            <a href="mailto:timwallacedev@gmail.com"  className="contact__link">
                <div className="contact__item">
                    <img className="contact__icon" src={email} alt="email logo"></img>
                    <h3 className="contact__handle">Timwallacedev@gmail.com</h3>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/timothy-wallace-dev/" className="contact__link">
                <div className="contact__item">
                    <img className="contact__icon" src={linkedin} alt="linkedin logo"></img>
                    <h3 className="contact__handle">@timothy-wallace-dev</h3>
                </div>
            </a>

            <a href="https://github.com/TimWallaceDev" className="contact__link">
                <div className="contact__item">
                    <img className="contact__icon" src={github} alt="github logo"></img>
                    <h3 className="contact__handle">@TimWallaceDev</h3>
                </div>
            </a>
        </div>
    )
})

export default Contact;