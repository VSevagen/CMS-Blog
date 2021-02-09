import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Asia from "../public/gnomeasia.jpg"
import WorkShop from "../public/workshop.jpg"
import Dance from "../public/dance.jpg"
import Group from "../public/group.jpg"
import Director from "../public/director.jpg"
import FishCurry from "../public/fishcurry.jpg"
import Boarding from "../public/boarding.jpg"
import Sponsor from "../public/sponsor.png"
// import DarkMode from "./images/dark-mode.png"
// import LightMode from "./images/light-mode.png"

// document.addEventListener('DOMContentLoaded', function() {
// let data = sessionStorage.getItem('mode');
// if(data == 'true'){
//     //document.body.style.backgroundColor = 'black';
//     let content = document.querySelectorAll(".blog-content");
//     var title = document.querySelector(".blog-title");
//     var date = document.querySelector(".blog-date");
//     var img = document.querySelector("#mode-style");
//     if(content.style != undefined){
//         content.style.color = "white";
//         title.style.color = "white";
//         date.style.color = "white";
//         img.src = LightMode;
//     }
// }
//  }, false);

function GnomeAsia(){
    return(
        <div>
                                <p class="blog-content">
                                First of all, I would like to thank the GNOME Foundation and the travel committee for providing me the sponsorship to attend this event.<br></br><br></br>

So I departed on the night of 10th of October from Trivandrum International Airport to Changi Airport and finally Juanda International Airport in Indonesia. I reached on the 11th of October and luckily was picked up by the group of volunteers, Mohammad Fadhil, and his colleague. We waited a couple of minutes for the arrival of Aditya Manglik, one of the speakers, and then departed for the venue.<br></br><br></br>
<img class="blog_img" src={Asia} alt=""></img><br></br><br></br>
<strong>Day 0</strong><br></br>

Once we reached the venue, we were greeted by Ahmad Haris as well as Kukuh Syafaat and many more. Everyone was working on something or eating since it was lunchtime. Gaurav’s newcomer workshop was scheduled around that time, so Sajeer Ahamed and I helped during that time. Both of those guys got GSoC in GNOME Foundation for 2019, and they have been working on GNOME projects for a long time now. We talked about their projects and how its been going on, so I got a lot of tips and hints on GSoC for next year. Sajeer also gave a talk on his GSoC project, which was related to GStreamer.<br></br><br></br>
<img class="blog_img" src={WorkShop} alt=""></img><br></br><br></br>
In the evening, we had a welcoming party, so it was the best time to meet everyone and ask about their work. I got to meet Andre Klapper, who is one of the developers of GNOME. I’ve always seen his comments and views on various issues in GitLab, so meeting him in person was inspiring. Unfortunately, he is not very talkative.<br></br><br></br>
<img class="blog_img" src={Dance} alt=""></img><br></br><br></br>

<strong>Day 1</strong><br></br>
It was an important day for me since my talk was scheduled in the evening. So I got up early, had my breakfast, and took a grab to the venue. However, I made a foolish mistake, which leads me to miss Neil’s talk. 🙁 Instead of traveling to Universitas Muhammadiyah Gresik, I went to Universitas Muhammadiyah Surabaya which was around 2 hours away. I lost about two and a half hours and reached approximately 10.30 am. In any case, I got to see Indonesia a bit more than I expected.

I freshened up and started working on primary details of my talk, which was related to Human Interface Engineering and the issues behind its standardization as an ISO standard. I was feeling confident but when I reached my allocated room, guess who’s there!<br></br><br></br>
<img class="blog_img" src={Group} alt=""></img><br></br><br></br>
Neil McGovern and Rosanna Yuen were sitting on the first bench in the right corner of the room. My heart skipped a beat, but I had to remain calm. I took a deep breath and introduced myself and my topic. The talk was around 45 minutes, and in the end, I would say it went pretty well. I had a couple of questions from the students as well as the executive director but managed to give a proper answer. I even got a picture with the executive director, Neil McGovern, as well as the director of Operation, Rosanna Yuen.<br></br><br></br>
<img id="unique" class="blog_img" src={Director} alt=""></img><br></br><br></br>
After the talk, I relaxed a bit and then went to the upper hall to attend the lightning talks presented by Kukuh syafaat, Faiq Aminuddin, Herpiko Dwi Aguno, and Radical Rakhman Wahid. The one offered by Faiq Aminuddin was pretty interesting since he talked about how open-source development has been in Indonesia. In the evening, we all gathered at Warung Apung Rahmawati, which is an Indonesian theme restaurant.<br></br><br></br>
<img class="blog_img" src={FishCurry} alt=""></img><br></br><br></br>
<strong>Day 2</strong><br></br>
The next series of talks and speeches were happening during that day. I attended a few of those but decided to walk around the city a bit since I had to depart tomorrow morning.<br></br><br></br>
<img class="blog_img" src={Boarding} alt=""></img><br></br><br></br>
The next morning, I took a plane back to India, waving goodbye to Indonesia 😉<br></br><br></br>
<img id="unique" class="blog_img" src={Sponsor} alt=""></img>
                                </p>
        </div>
    );
}

export default GnomeAsia;