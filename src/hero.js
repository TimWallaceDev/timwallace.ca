import arrow from "./assets/arrow_forward.svg"


const Hero = () => {
    return (
        <div className="hero">
            <h1 className="name">Tim Wallace</h1>
            <h2 className="occupation">Musician <img src={arrow}/> Full Stack Developer</h2>
        </div>
    )
}

export default Hero