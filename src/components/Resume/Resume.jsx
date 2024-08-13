import React, {useState} from 'react'
import "./Resume.scss"

function Resume() {

    const [resumeIsHovered, setResumeIsHovered] = useState(false)

    return (
        <a href={`${process.env.PUBLIC_URL}/Tim Wallace - Resume.pdf`} download>
            <div className="resume" onMouseEnter={() => setResumeIsHovered(true)} onMouseLeave={() => setResumeIsHovered(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" style={resumeIsHovered ? {fill:"blue"} : {fill:"#111" }}><path d="M480-328.46 309.23-499.23l42.16-43.38L450-444v-336h60v336l98.61-98.61 42.16 43.38L480-328.46ZM252.31-180Q222-180 201-201q-21-21-21-51.31v-108.46h60v108.46q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-108.46h60v108.46Q780-222 759-201q-21 21-51.31 21H252.31Z"/></svg>
                <span className="resume__text">Resume</span>
            </div>
        </a>
    )
}

export default Resume