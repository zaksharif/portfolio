import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import FamilyGrad from "../assets/FamilyGrad.jpg"
import SoloHcGrad from "../assets/SoloHcGrad.jpg"
const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Eager to learn Software Engineer with experince in multiple programming languages.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={FamilyGrad} className="img" alt="Family Grad" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={SoloHcGrad} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent