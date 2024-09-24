import check from "../../assets/check_circle.svg"
import failed from "../../assets/error.svg"
import send from "../../assets/send.svg"

export function ContactMessageStatus(props) {
    const isSuccessful = props.isSuccessful
    const isSending = props.isSending
    const contactMessageVisible = props.contactMessageVisible
    const name = props.name
    const message = props.message

    if (!contactMessageVisible) {
        return
    }

    if (isSending === true) {
        return (
            <div className="form__message-status--visible form__message-status--successful">
                <span>
                    Sending Message...
                </span>
                <img src={send} alt="send icon" />
            </div>
        )
    }
    else if (isSending === false) {
        if (!name || !message) {

            return (
                <div className="form__message-status--visible form__message-status--failed">
                    <span>
                        Please fill in all fields
                    </span>
                    <img src={failed} alt="error icon" />
                </div>
            )
        }
        if (isSuccessful === true) {
            return (
                <div className="form__message-status--visible form__message-status--successful">
                    <span>
                        Message Successful!
                    </span>
                    <img src={check} alt="checkmark" />
                </div>
            )
        }
        else if (isSuccessful === false) {
            return (
                <div className="form__message-status--visible form__message-status--failed">
                    <span>
                        Message Failed!
                    </span>
                    <img src={failed} alt="error icon" />
                </div>
            )
        }
    }
}