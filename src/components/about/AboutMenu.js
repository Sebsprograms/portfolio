import React, { useState } from "react";

import './About.css';
import AboutMenuBottom from "./AboutMenuBottom";
import AboutMenuTop from "./AboutMenuTop";

function AboutMenu({ addActiveTab }) {
    let [showPersonalInfo, setShowPersonalInfo] = useState(true);
    function togglePersonalInfo() {
        setShowPersonalInfo(prev => !prev);
    }

    return (
        <div id='about-menu' className='light-border-left'>
            <AboutMenuTop addActiveTab={addActiveTab} showPersonalInfo={showPersonalInfo} togglePersonalInfo={togglePersonalInfo} />
            <AboutMenuBottom showPersonalInfo={showPersonalInfo} />
        </div>

    );
}

export default AboutMenu;