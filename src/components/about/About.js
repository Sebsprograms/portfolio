import React, { useState } from "react";

import './About.css';
import AboutMenu from "./AboutMenu";
import LeftBar from "./LeftBar";
import Tab from './Tab';

import tabMap from './left_page_content/tabMap.js';

function About() {
    const [activeTabs, setActiveTabs] = useState(['about']);
    const [focusedTab, setFocusedTab] = useState(['about']);

    function changeFocusedTab(tab) {
        setFocusedTab(tab);
    }

    function addActiveTab(tab) {
        if (!activeTabs.includes(tab)) {
            setActiveTabs(prev => [...prev, tab]);
            changeFocusedTab(tab);
        }
    }

    function closeActiveTab(tab) {
        if (activeTabs.includes(tab)) {
            setActiveTabs(prev => {
                const updatedTabs = prev.filter(e => e !== tab)
                if (updatedTabs.length === 0) {
                    setFocusedTab(null);
                } else {
                    setFocusedTab(updatedTabs[0]);
                }
                return updatedTabs;
            });
        }
    }

    console.log(focusedTab);

    return (
        <div id="about-wrapper" >
            <LeftBar />
            <AboutMenu addActiveTab={addActiveTab} />
            <div id='about-content' className='light-border-left'>
                <div id='about-content-top-bar' className='light-border-bottom info-bar'>
                    {activeTabs.map((tab, index) => <Tab key={index} title={tab} focusTab={changeFocusedTab} closeTab={closeActiveTab} />)}
                </div>
                <div id='about-content-content'>
                    {focusedTab && tabMap[focusedTab]}
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