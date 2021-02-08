import React from "react"
import { Link } from "react-router-dom";

import DarkMode from "../public/dark-mode.png"
import LightMode from "../public/light-mode.png";

if (typeof window !== 'undefined') {
    sessionStorage.setItem('mode', 'false');
}

function handleClick(e) {
    let data = sessionStorage.getItem("mode");
    var a = document.querySelectorAll("#blog-title");
    var h4 = document.querySelectorAll("h4");
    var p = document.querySelectorAll("p");
    var img = document.querySelector("#mode-style");
    var blogContent = document.querySelector(".blog-content");
    var blogTitle = document.querySelector(".blog-title");
    var blogDate = document.querySelector(".blog-date");
    
    if(data === "false"){
        document.body.style.backgroundColor = 'black';
        for(var i =0,j=0,k=0;i<a.length,j<p.length,k<h4.length;i++,j++,k++){
            a[i].style.color = "white";
            h4[i].style.color = "white";
            p[i].style.color = "white";
        }
        if(blogContent != undefined) {
            blogContent.style.color = "white";
            blogTitle.style.color = "white";
            blogDate.style.color = "white";
        }
        img.src = LightMode;
        sessionStorage.setItem('mode', 'true');
    }
    
    if(data === "true") {
        document.body.style.backgroundColor = "white";
        for(i =0,j=0,k=0;i<a.length,j<p.length,k<h4.length;i++,j++,k++){
            a[i].style.color = "#333";
            h4[i].style.color = "#333";
            p[i].style.color = "#333";
        }
        if(blogContent != undefined) {
            blogContent.style.color = "#333";
            blogTitle.style.color = "#333";
            blogDate.style.color = "#333";
        }
        img.src = DarkMode;
        sessionStorage.setItem('mode', 'false');
        
    }
}


function Header() {
    return (
        <div>
            <div class="header">
                <div class="site-title">
                    <a id="title" href="/">My Blog</a>
                    <div class="site-options">
                        <i>
                        <img id="mode-style" src={DarkMode} alt="" onClick={handleClick} onKeyDown={handleClick}></img>
                        </i>
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