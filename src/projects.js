
import { block } from "million/react";
import melodyMastermind from "./assets/Melody MasterMind - Desktop.png"
import humanMagic from "./assets/Human Magic - full site.png"


const Projects = block(() => {

    return (
        <div className="projects">
            <h3 className="projects__heading">Projects</h3>

            <div className="projects__container" >

                <a className="project__link" href="https://timwallace.ca/melody-mastermind/#/melody-mastermind">
                    <div className="project">
                        <div className="project__right">
                            <img className="project__image" src={melodyMastermind} alt="screenshot of melody mastermind game UI"></img>
                        </div>
                        <div className="project__left">
                            <h4 className="project__title">Melody Mastermind</h4>
                            <p className="project__description">A music guessing game. Choose from a variety of genres and playlists. The goal is to correctly identify the title of the song playing. The faster you answer, the more points you earn.</p>
                        </div>
                    </div>
                </a>

                <a className="project__link" href="https://humanmagic.ca">
                    <div className="project">
                        <div className="project__right">
                            <img className="project__image" src={humanMagic} alt="screenshot of human magic website landing page"></img>
                        </div>
                        <div className="project__left">
                            <h4 className="project__title">Human Magic</h4>
                            <p className="project__description">A Website for local Toronto band "Human Magic".</p>
                        </div>
                    </div>
                </a>

            </div>
        </div >
    )
})

export default Projects;