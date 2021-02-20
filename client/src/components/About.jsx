import React from "react"
import "../styles/about.css"
import "../styles/main.css"
import Footer from "./Footer"
import Header from "./Header"
import { gql, useQuery } from '@apollo/client';
import Loader from "react-loader-spinner";

const GET_ABOUT_DETAILS = gql`
    query blogs {
        about {
            name
            desc
            email
            skills
        }
    }

`;


function About()  {

    const {loading, error, data} = useQuery(GET_ABOUT_DETAILS);
    if(loading) return <div className="spinner"><Loader type="Grid" color="#9c9c9c" height={80} width={80}/></div>;
    if(error) return `Error! ${error.message}`;

    return (
        <div className="about">
            <Header />

            {data.about.map(about => (
            <div className="layout">
                <p>Hi there ! <br></br>
                My name is <strong>{about.name}</strong>. {about.desc}</p>

                <p className="text-center">-----------------------------------------------------------------------------</p>
                <p>
                    <span>Things I've meddled with :</span><br></br><br></br>
                    {about.skills.map(skill =>(
                        <div>
                        <span>- {skill}</span><br></br>
                        </div>
                    ))}
                </p>
                <p className="text-center">-----------------------------------------------------------------------------</p>
                <p className="center-tag">Contact</p>
                <p>Email: {about.email}</p>

            </div>
            ))}

            <Footer />
        </div>

    );
}

export default About;