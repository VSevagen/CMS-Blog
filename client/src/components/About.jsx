import React from "react"
import "../styles/about.css"
import Footer from "./Footer"
import Header from "./Header"

function About()  {
    return (
        <div class="about">
            <Header />

            <div class="layout">
                <p>Hi there ! <br></br>
                My name is <strong>Veerasamy Sevagen</strong>. I'm currently a student at Amrita Vishwa Vidyapeetham in the State of Kerala, India, pursuing a B-Tech degree in Computer Science and Engineering .I'm an open-source enthusiast and also part of FOSS@Amrita, which is a club driven by Amrita Students dedicated to open-source softwares, contribution drives and Hackathons.</p>

                <p class="text-center">-----------------------------------------------------------------------------</p>
                <p>
                    <span>Things I've meddled with :</span><br></br><br></br>
                    <span>- Web Development (MEAN Stack)</span><br></br>
                    <span>- The GNOME Project</span><br></br>
                </p>
                <p class="text-center">-----------------------------------------------------------------------------</p>
                <p class="center-tag">Contact</p>
                <p>Email: sevagenv@gmail.com 0R sevagen@gnome.org</p>

            </div>

            <Footer />
        </div>

    );
}

export default About;