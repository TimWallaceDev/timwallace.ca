import { Link } from "react-router-dom";


function Projects() {

    return (
        <div id="projects">
            <h3 id="projects-heading">Projects</h3>

            <div id="projects-container" >

                <a href="https://timwallace.ca/melody-mastermind/#/melody-mastermind">
                    <div className="project">
                        <h4 className="project-title">Melody Mastermind</h4>
                        <p className="project-description">A music guessing game.</p>
                    </div>
                </a>

                <a href="https://humanmagic.ca">
                    <div className="project">
                        <h4 className="project-title">Human Magic</h4>
                        <p className="project-description">A Website for local Toronto band "Human Magic".</p>
                    </div>
                </a>


            </div>
        </div >
    )
}

export default Projects;