import arrow from "../../assets/arrow_forward.svg";
import "./Hero.scss";


const Hero = () => {
    return (
        <div className="hero">
            <h1 className="name">Tim Wallace</h1>
            <h2 className="occupation">Musician <img src={arrow} alt="arrow icon"/> Full Stack Developer</h2>
        </div>
    )
}

export default Hero