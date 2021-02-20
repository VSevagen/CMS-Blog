import React from "react"
import Footer from "./Footer"
import "../styles/main.css"
import Header from "./Header"
import { gql, useQuery } from '@apollo/client'
import Loader from "react-loader-spinner"

const GET_PROJECT_DETAILS = gql`
    query blogs {
        projects {
            title
            desc
            link
            demolink
        }
    }
`;

function Projects(){

    const {loading, error, data} = useQuery(GET_PROJECT_DETAILS);
    if(loading) return <div className="spinner"><Loader type="Grid" color="#9c9c9c" height={80} width={80}/></div>;
    if(error) return `Error! ${error.message}`;
    return(
        <div>
            <Header/>
            <div className="post-list">
                <ul>
                    {data.projects.map(project => (
                        <li>
                           <h2 id="blog-title">{project.title}</h2>
                        <h4>
                            {project.desc}
                        </h4>
                        <a className="project-link" href={project.demolink}>
                            {project.demolink === "" ? "": "Play"}
                        </a>
                        <a id="unecessary" href="/project">Had to include text because of screen-reader warning</a> { /* this is just for space btw */}
                        <a className="project-link" href={project.link} >Link to project</a> 
                        </li>
                    ))}
                </ul>

            </div>
            <Footer/>
        </div>   
    );}

    export default Projects;