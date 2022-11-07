import React from 'react'

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import ResumeExperience from '../components/ResumeExperience';
const Resume = () => {
    return (

        < div >
            <Navbar />
            <HeroImg2 heading="Resume." text="Up to date experience" />
            <ResumeExperience />
            <Footer />
        </div >
    )
}

export default Resume