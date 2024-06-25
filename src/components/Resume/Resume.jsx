import React from 'react'
import "./Resume.scss"
import download from "../../assets/download.svg"
import downloadHover from "../../assets/download--hover.svg"
import { useState } from 'react'
import resume from "../../assets/Tim Wallace - Resume.pdf"

function Resume() {

    const [isHovering, setIsHovering] = useState(false)

    function hover() {
        setIsHovering(true)
    }

    function dehover() {
        setIsHovering(false)
    }

    return (
        <a href={resume} download>
            <div className="resume" onMouseEnter={hover} onMouseLeave={dehover}>
                <img src={isHovering ? downloadHover : download} alt="download icon" className="resume__download-icon" />
                <span className="resume__text">Resume</span>
            </div>
        </a>
    )
}

export default Resume