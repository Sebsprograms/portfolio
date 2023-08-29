import React, { useState } from "react";

import './About.css';
import AboutMenu from "./AboutMenu";
import LeftBar from "./LeftBar";
import AboutContent from "./AboutContent";

function About() {
    return (
        <div id="about-wrapper" >
            <LeftBar />
            <AboutMenu />
            <div id='about-content' className='light-border-left'>
                <div id='about-content-top-bar' className='light-border-bottom info-bar'>
                    {/* Need ternary to display content */}
                    <div></div>
                </div>
                <div id='about-content-content'>
                    {/* Need ternary to display content */}
                    <AboutContent />
                </div>
            </div>
            <div id='about-showcase' className='light-border-left'>
                <div id='about-showcase-top-bar' className='light-border-bottom info-bar'>

                </div>
                <div id='about-showcase-content'>

                </div>
            </div>
        </div>
    );
}

export default About;