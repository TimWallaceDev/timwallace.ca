import { useState } from "react"
import "./ContactForm.scss"
import { ContactMessageStatus } from "../ContactMessageStatus/ContactMessageStatus"

export function ContactForm() {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [contactMessageVisible, setContactMessageVisible] = useState(false)
    const [contactMessageSuccessful, setContactMessageSuccessful] = useState(false)
    const [isSending, setIsSending] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(name, message)
        setContactMessageVisible(true)
        setIsSending(true)
        try {
            const response = await fetch("https://timwallace.ca/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, message })
                })
                console.log(response)
            if (response.status === 201) {
                console.log("message sent!")
                setName("")
                setMessage("")
                setContactMessageVisible(true)
                setContactMessageSuccessful(true)
                setIsSending(false)
            }
            else {
                console.log("message failed")
                console.log("status code: ", response.status)
                setIsSending(false)
                setContactMessageSuccessful(false)
            }
        } catch (error) {
            console.error(error)
            setContactMessageSuccessful(false)
            setContactMessageVisible(true)
            setIsSending(false)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="form">
            <h3 className="form__heading">Contact Form</h3>
            <input className="form__name" type="text" name="name" placeholder="name" onChange={(e) => setName(e.currentTarget.value)} value={name}></input>
            <textarea className="form__message" name="message" placeholder="message" onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <div className="form__bottom-row">
                <ContactMessageStatus isSending={isSending} isSuccessful={contactMessageSuccessful} contactMessageVisible={contactMessageVisible} name={name} message={message}/>
                <button className="form__submit" type="submit">Send Message</button>
            </div>
        </form>
    )
}