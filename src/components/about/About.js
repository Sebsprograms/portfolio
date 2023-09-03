import React, { useState } from "react";

import './About.css';
import AboutMenu from "./AboutMenu";
import LeftBar from "./LeftBar";
import AboutContent from "./AboutContent";
import Tab from './Tab';

function About() {
    const [activeTabs, setActiveTabs] = useState(['about']);

    function addActiveTab(tab) {
        if (!activeTabs.includes(tab)) {
            setActiveTabs(prev => [...prev, tab]);
        }

        console.log(activeTabs);
    }

    function closeActiveTab(tab) {
        if (activeTabs.includes(tab)) {
            setActiveTabs(prev => prev.filter(e => e !== tab));
        }
    }

    return (
        <div id="about-wrapper" >
            <LeftBar />
            <AboutMenu addActiveTab={addActiveTab} />
            <div id='about-content' className='light-border-left'>
                <div id='about-content-top-bar' className='light-border-bottom info-bar'>
                    {activeTabs.map((tab) => <Tab title={tab} closeTab={closeActiveTab} />)}
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