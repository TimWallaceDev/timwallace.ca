import { ContactLinks } from "./components/ContactLinks/ContactLinks";
import { ContactForm } from "./components/ContactForm/ContactForm";

const Contact = () => {



    return (
        <section className="contact-section">
            <h3 className="contact__heading">Let's get in touch!</h3>
            <div className="contact">
                <ContactLinks/>
                <ContactForm/>
            </div>
        </section>
    )
}

export default Contact;