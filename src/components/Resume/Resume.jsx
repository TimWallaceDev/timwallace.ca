import React from 'react'
import "./Resume.scss"

function Resume() {

    return (
        <a href={`${process.env.PUBLIC_URL}/Tim Wallace - Resume.pdf`} download>
            <div className="resume">
                <span className="material-symbols-outlined resume__icon">download</span>
                <span className="resume__text">Resume</span>
            </div>
        </a>
    )
}

export default Resume