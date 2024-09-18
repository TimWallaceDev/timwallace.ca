import { useState } from "react"
import "./ContactForm.scss"

export function ContactForm() {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [contactMessageVisible, setContactMessageVisible] = useState(false)
    const [contactMessageSuccessful, setContactMessageSuccessful] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(name, message)
        try {
            const response = await fetch("https://timwallace.ca/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, message })
                })
            if (response.status === 201){
                console.log("message sent!")
                setName("")
                setMessage("")
                setContactMessageVisible(true)
                setContactMessageSuccessful(true)
            }
            else {
                console.log("message failed")
            }
        } catch (error) {
            console.error(error)
            setContactMessageSuccessful(false)
            setContactMessageVisible(true)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="form">
            <h3 className="form__heading">Contact Form</h3>
            <input className="form__name" type="text" name="name" placeholder="name" onChange={(e) => setName(e.currentTarget.value)} value={name}></input>
            <textarea className="form__message" name="message" placeholder="message" onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <p className={ contactMessageVisible ? "form__contact-message--visible" : "form__contact-message"}>{contactMessageSuccessful ? "Message has been sent" : "Something went wrong with the message"}</p>
            <button className="form__submit" type="submit">Send Message</button>
        </form>
    )
}