import React from "react"
import "../styles/main.css"
import Twitter from "../public/twitter.png"
import Linkedin from "../public/linkedin.png"
import Gitlab from "../public/gitlab.png"

export default function Footer() {
    return (

        <div>
            <div class="bottom-separator"></div>

            <div class="footer">

                <div class="link-holder text-center">
                    <a href="https://gitlab.gnome.org/Sevagen" target="_blank" rel="noopener noreferrer"><img class="links" src={Gitlab} alt=""></img></a>
                    <a href="https://twitter.com/SevagenV" target="_blank" rel="noopener noreferrer"><img class="links" src={Twitter} alt=""></img></a>
                    <a href="https://www.linkedin.com/in/veerasamy-sevagen/" target="_blank" rel="noopener noreferrer"><img class="links" src={Linkedin} alt=""></img></a>
                </div>

                <div class="copyright text-center">Copyright © 2020 - Veerasamy S</div>
            </div>
        </div>
    );
}