import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import ResumeCardData from "./ResumeCardData";

import React from 'react';


const ResumeExperience = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Experience</h1>
            <div className="project-container">
                {ResumeCardData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ResumeExperience