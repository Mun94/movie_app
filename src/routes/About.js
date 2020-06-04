import React from "react";
import "./About.css";

function About(props){
    console.log(props);

    return (
        <div className = "about__container">
            <span>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quibusdam reprehenderit in incidunt fugit neque rerum aut reiciendis sit, provident esse obcaecati! Accusamus soluta vitae perspiciatis repudiandae debitis officia laudantium."
            </span>

            <span> - Lorem 2020</span>
        </div>
    );
}

export default About;