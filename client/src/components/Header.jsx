import React from "react"; 
import { Link } from "react-router-dom";
import DarkToggle from "./DarkToggle";

function Header() {
    return (
        <div>
            <div class="header">
                <div class="site-title">
                    <a id="title" href="/">My Blog</a>
                    <DarkToggle />
                    <div class="site-options">
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>

            <div class="separator"></div> 
        </div>
    );
}

export default Header;