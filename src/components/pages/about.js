import React from "react";
import profilePicture from "/static/assets/images/bio/headshot.jpg";

export default function() {
    return (
        <div className = "content-page-wrapper">
            <div 
                className = "left-column"
                style = {{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className = "right-column">
        
            Hi! I am currently a high school senior at American Preparatory Academy 
            Draper 3.
 
            <p>
            Throughout my experience as a student, I have developed a strong 
            background in technical and artistic skills, such as coding and painting. 
            I am driven to lead a team into various projects with my design skills, 
            such coordinating staff and students to help decorate the halls for Spirit 
            Week, planning marketing and decor for the 2021 Girls' Preference Dance, 
            founding and leading the Videography Team. I am a 'forever student', 
            always learning about new skills and eager to understand the connections 
            between design, psychology, and technology.
            </p>
            
            <p>
            These topics along with my leadership skills led to one of my recent successes
            as the President, Co-Director, and Editor of APA Videography Team. While we
            started simply to aid the school with virtual assemblies, we quickly expanded to 
            create promotional and educational videos with various directors of the school
            within just a couple months. 
            Furthermore, I have taken initiative and finished code2success courses: Coding 
            Foundations and Dissecting React JS hosted by Bottega School. Throughout these
            courses, I have been able to implement this portfolio website and replicate 
            website pages. 
            </p> 

            <p>
            
            </p>

            </div>
        </div>
    );
}
