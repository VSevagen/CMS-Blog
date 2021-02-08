import React from "react"
import Footer from "./Footer"
import Header from "./Header"

function GnomeAsia(){
    return(
        <div>
            <Header/>
            <div class="post-list">
                <ul>
                    <li>
                        <a id="blog-title" href="/project">Color Game made using DOM Manipulation and JQuery</a>
                        <h4>
                            This is a simple game made to improve my skill in manipulating the DOM elements. The winning RGB color code is displayed at the top and is taken at random for every session. From the colors provided, you have to find the correct one. There are two modes, hard and easy. In the hard mode, you'll have to chose from 6 colors and 3 colors from the easy mode.
                        </h4>
                        <a class="project-link" href="https://jovial-gates-811d15.netlify.app">Play</a>
                        <a id="unecessary" href="/project">Had to include text because of screen-reader warning</a> { /* this is just for space btw */}
                        <a class="project-link" href="https://github.com/VSevagen/RGB-Color-Game" >Link to project</a>
                    </li>

                    <li>
                        <a id="blog-title" href="/project">The GNOME Project</a>
                        <h4>
                            The GNOME Project is an open source project governed by the GNOME Foundation. The latter consists of various applications used in Linux based distributions (Ubuntu, Fedora, Manjaro) in the form of a desktop environment
                        </h4>
                        <a class="project-link" href="https://gitlab.gnome.org/dashboard/merge_requests/?author_username=Sevagen" >Link to patches</a>
                    </li>
                    <li>
                        <a id="blog-title" href="/project">Airline Reservation System</a>
                        <h4>
                            As the name suggest, its a reservation system for air travel. This project was made to showcase OOP(Object Oriented Programming) concepts, such as encapsulation, abstraction, inheritance and polymorphism.  
                        </h4>
                        <a class="project-link" href="https://github.com/VSevagen/OOP-s-Project" >Link to project</a>
                    </li>
                </ul>

            </div>
            <Footer/>
        </div>   
    );}

    export default GnomeAsia;