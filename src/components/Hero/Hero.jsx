import "./Hero.css"
import React from "react"
import HomeImage from "../../assets/home-phones.png";
import Login from "../../components/Login/Login"

const Hero = () => {
    return(
        <section id="hero">
            <div className="container">
                <div className="left">
                    <img src={HomeImage} alt="" />
                </div>
                <div className="right">
                    <Login/>
                </div>
            </div>
        </section>
    )
}


export default Hero