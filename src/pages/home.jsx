import React from 'react';
import './styles/home.css';
 //HashLink Import
 import { HashLink } from 'react-router-hash-link';
 //React-Router Import
 import { Link } from 'react-router-dom';
//component imports
import TechCard from '../components/TechCard';
import MySiteCard from '../components/MySiteCard';
import ProjectsCardROUTER from '../components/ProjectsCardROUTER';
import ProjectsCardTODO from '../components/ProjectsCardTODO';
import ProjectsCardCHAT from '../components/ProjectsCardCHAT';

const ListOfTech = [
    {
        name: "HTML",
        imgURL: "https://wesleyinsley.com/Assets/images/html-icon.png"
    },
    {
        name: "CSS",
        imgURL: "https://wesleyinsley.com/Assets/images/css-icon.png"
    },
    {
        name: "JS",
        imgURL: "https://wesleyinsley.com/Assets/images/javascript-icon.png"
    },
    {
        name: "React",
        imgURL: "https://wesleyinsley.com/Assets/images/react-icon.png"
    },
    {
        name: "React-bootstrap",
        imgURL: "https://wesleyinsley.com/Assets/images/react-bootstrap-icon.png"
    },
    {
        name: "React-router",
        imgURL: "https://wesleyinsley.com/Assets/images/react-router.png"
    },
    {
        name: "Firebase",
        imgURL: "https://wesleyinsley.com/Assets/images/firebase-icon.png"
    }
];

console.log(ListOfTech[1].name);

const Home = () => {
    return(
        <div>
            <div id="top" className="container-home">
                Hello, I'm <span>Wes</span>.<br />
                I'm an actor/editor turned front-end developer.<br />
                <HashLink to="/#about-home"><button className="continue-btn">Learn More About Me <i className="fa-solid fa-circle-arrow-down"></i></button></HashLink>
            </div>

            <div id="about-home" className="container-block">
                <div id="about-color-hold">
                    <h1>What's My Story?</h1>
                    <p>Fully committed to the philosophy of life-long learning, 
                        I’m an entertainer turned programmer. "What does that mean?" you might ask.
                        I've spent the last 10 years working in the entertainment industry as an actor,
                        editor, and producer. I've had the pleasure of working with over 100 talented
                        bands and brands, including Emmy Award winners. Throughout that decade of work
                        I was also studying programming and building websites for friends, family, and
                        freelance clients. The unique combination of creativity, logic, technology and 
                        never running out of new things to discover, drives my excitement and passion 
                        for web development. When I’m not at my computer I enjoy playing guitar, taking
                        a walk through Central Park, or spending time with my family.</p>
                </div>
                <HashLink to="/#about-tech"><button className="continue-btn">So What Tech Do I Use? <i className="fa-solid fa-circle-arrow-down"></i></button></HashLink>
            </div>

            <div id="about-tech" className="container-block">
                <div id="about-color-hold">
                    <h1>Technologies</h1>
                    <p><i>(and learning more everyday!)</i></p>
                        <div className="tech-blocks-container">
                        <TechCard image={ListOfTech[0].imgURL}/> 
                        <TechCard image={ListOfTech[1].imgURL}/> 
                        <TechCard image={ListOfTech[2].imgURL}/> 
                        <TechCard image={ListOfTech[3].imgURL}/> 
                        <TechCard image={ListOfTech[4].imgURL}/> 
                        <TechCard image={ListOfTech[5].imgURL}/> 
                        <TechCard image={ListOfTech[6].imgURL}/>     
                        </div>
                </div>
                <HashLink to="/#samples"><button className="continue-btn">And What About Samples? <i className="fa-solid fa-circle-arrow-down"></i></button></HashLink>
            </div>


            <div id="samples" className="samples-block">
                <div id="about-color-hold">
                    <h1>Sample Projects</h1>
                        <div className="tech-blocks-container">
                            <div className="tech-block">
                                <ProjectsCardTODO />
                                <MySiteCard />  
                            </div> 
                        </div>
                </div>
                <HashLink to="/#contact-box"><button className="continue-btn">And How Can You Reach Me? <i className="fa-solid fa-circle-arrow-down"></i></button></HashLink>
            </div>

            

            <div id="contact-box" className="container-block">
                <div id="about-color-hold">
                    <h1>Contact</h1>
                    <div className="contact-form">
                    <a href="mailto:friends@wesleyinsley.com">Just Click Here And Send Me an E-Mail!</a>
                    </div>
                </div>
                <HashLink to="/#top"><button className="continue-btn">Back To The Top? <i className="fa-solid fa-circle-arrow-up"></i></button></HashLink>
            </div>
        </div>
    )
}

export default Home;