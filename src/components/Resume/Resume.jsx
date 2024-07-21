import React from 'react'
import "./Resume.scss"
import download from "../../assets/download.svg"
import downloadHover from "../../assets/download--hover.svg"
import { useState } from 'react'

function Resume() {

    const [isHovering, setIsHovering] = useState(false)

    function hover() {
        setIsHovering(true)
    }

    function dehover() {
        setIsHovering(false)
    }

    return (
        <a href={`${process.env.PUBLIC_URL}/Tim Wallace - Resume.pdf`} download>
            <div className="resume" onMouseEnter={hover} onMouseLeave={dehover}>
                <img src={isHovering ? downloadHover : download} alt="download icon" className="resume__download-icon" />
                <span className="resume__text">Resume</span>
            </div>
        </a>
    )
}

export default Resume