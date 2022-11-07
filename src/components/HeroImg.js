import "./HeroImgStyles.css";
import React from 'react';
import SoloGrad from "../assets/SoloGrad.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={SoloGrad} alt="SoloImg" />
            </div>
            <div className="content">
                <p>
                    ZAKARIA SHARIF
                </p>
                <h1>SOFTWARE ENGINEER.</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg