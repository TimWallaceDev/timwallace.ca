import { useState } from "react"
import "./ContactForm.scss"

export function ContactForm() {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

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
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="form">
            <input className="form__name" type="text" name="name" placeholder="name" onChange={(e) => setName(e.currentTarget.value)} value={name}></input>
            <textarea className="form__message" name="message" placeholder="message" onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button className="form__submit" type="submit">Send Message</button>
        </form>
    )
}