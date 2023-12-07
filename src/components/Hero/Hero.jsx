import "./Hero.css";
import React from "react";
import HomeImage from "../../assets/home-phones.png";
import Login from "../../components/Login/Login";
import playStoreImg from "../../assets/play-store.png"
import microsoftImg from "../../assets/microsoft.png"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="left">
                    <img src={HomeImage} alt="" />
                </div>
                <div className="right">
                    <Login />
                    <div className="sign-up">
                        <p>Don't have an account? <span>Sign up</span></p>
                    </div>
                    <div className="get-app">
                        <p>
                            Get the app.
                        </p>
                        <div className="logos">
                            <img src={playStoreImg} alt="play store" />
                            <img src={microsoftImg} alt="microsoft store" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero