
import melodyMastermind from "./assets/Melody MasterMind - Desktop.png"
import humanMagic from "./assets/Human Magic - full site.png"

const Projects = () => {

    return (
        <div className="projects">
            <h3 className="projects__heading">Projects</h3>

            <div className="projects__container" >


                <div className="project">
                    <div className="project__right">
                        <img className="project__image" src={melodyMastermind} alt="screenshot of melody mastermind game UI"></img>
                    </div>
                    <div className="project__left">
                        <div className="project__top">
                            <h4 className="project__title">Melody Mastermind</h4>
                            <p className="project__description">A music guessing game. Choose from a variety of genres and playlists. The goal is to correctly identify the title of the song playing. The faster you answer, the more points you earn.</p>
                        </div>
                        <div className="project__bottom">
                            <a className="project__live-link" href="https://timwallace.ca/melody-mastermind/" target="_blank" rel="noreferrer">Live Link</a>
                            <a className="project__github-link" href="https://github.com/TimWallaceDev/melody-mastermind" target="_blank" rel="noreferrer">Github Repo</a>
                        </div>
                    </div>
                </div>


                <div className="project">
                    <div className="project__right">
                        <img className="project__image" src={humanMagic} alt="screenshot of human magic website landing page"></img>
                    </div>
                    <div className="project__left">
                        <div className="project__top">
                            <h4 className="project__title">Human Magic</h4>
                            <p className="project__description">A Website for local Toronto band "Human Magic".</p>
                        </div>
                        <div className="project__bottom">
                            <a className="project__live-link" href="https://humanmagic.ca" target="_blank" rel="noreferrer">Live Link</a>
                            <a className="project__github-link" href="https://github.com/TimWallaceDev/humanmagic" target="_blank" rel="noreferrer">Github Repo</a>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Projects;