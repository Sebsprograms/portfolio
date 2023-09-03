import React, { useState } from "react";

import './About.css';
import FileItem from "./FileItem";

function AboutMenuTop({ showPersonalInfo, togglePersonalInfo, addActiveTab }) {

    let personalInfoStyle = { display: showPersonalInfo ? 'block' : 'none' }
    let [showCredentials, setShowCredentials] = useState(false);
    function toggleCredentials() {
        setShowCredentials(prev => !prev);
    }

    return (
        <div id='about-menu-top'>
            <div onClick={togglePersonalInfo} className='light-border-bottom info-bar'>{showPersonalInfo ? <i className="menu-icon fa-solid fa-angle-down"></i> : <i className="menu-icon fa-solid fa-angle-right"></i>}<p>personal-info</p></div>
            <div style={personalInfoStyle} id='about-menu-folders'>
                <FileItem title="about" icon="fa-file" colorClass="icon-red" addActiveTab={addActiveTab} />
                <FileItem title="experience" icon="fa-file-word" colorClass="icon-green" addActiveTab={addActiveTab} />
                <FileItem title="interests" icon="fa-file-export" colorClass="icon-blue" addActiveTab={addActiveTab} />
                <div onClick={toggleCredentials} className="file-item">
                    {showCredentials ? <i className="menu-icon fa-solid fa-folder-open"></i> : <i className="menu-icon fa-solid fa-folder"></i>}
                    <p>credentials</p>
                </div>
                {showCredentials && (
                    <ul>
                        <li onClick={() => addActiveTab('c1')}>Certificate 1</li>
                        <li onClick={() => addActiveTab('c2')}>Certificate 2</li>
                        <li onClick={() => addActiveTab('c3')}>Certificate 3</li>
                    </ul>
                )}
            </div>
        </div>

    );
}

export default AboutMenuTop;