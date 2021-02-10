import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { gql, useQuery } from '@apollo/client'

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
    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;
    return(
        <div>
            <Header/>
            <div class="post-list">
                <ul>
                    {data.projects.map(project => (
                        <li>
                           <a id="blog-title" href="/project">{project.title}</a>
                        <h4>
                            {project.desc}
                        </h4>
                        <a class="project-link" href={project.demolink}>
                            {project.demolink == "" ? "": "Play"}
                        </a>
                        <a id="unecessary" href="/project">Had to include text because of screen-reader warning</a> { /* this is just for space btw */}
                        <a class="project-link" href={project.link} >Link to project</a> 
                        </li>
                    ))}
                </ul>

            </div>
            <Footer/>
        </div>   
    );}

    export default Projects;