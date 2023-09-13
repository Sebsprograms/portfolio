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
            <div onClick={togglePersonalInfo} className='light-border-bottom info-bar-inset info-bar'>{showPersonalInfo ? <i className="menu-icon fa-solid fa-angle-down"></i> : <i className="menu-icon fa-solid fa-angle-right"></i>}<p>personal-info</p></div>
            <div style={personalInfoStyle} id='about-menu-folders'>
                <FileItem title="about" icon="fa-file" colorClass="icon-red" addActiveTab={addActiveTab} />
                <FileItem title="experience" icon="fa-file-word" colorClass="icon-green" addActiveTab={addActiveTab} />
                <FileItem title="interests" icon="fa-file-export" colorClass="icon-blue" addActiveTab={addActiveTab} />
                <div onClick={toggleCredentials} className="file-item">
                    {showCredentials ? <i className="menu-icon fa-solid fa-folder-open"></i> : <i className="menu-icon fa-solid fa-folder"></i>}
                    <p>credentials</p>
                </div>
                {showCredentials && (
                    <div>
                        <FileItem title="code_foundations" icon="fa-award" colorClass="icon-yellow" addActiveTab={addActiveTab} />
                        <FileItem title="full_stack_development" icon="fa-award" colorClass="icon-yellow" addActiveTab={addActiveTab} />
                        <FileItem title="github" icon="fa-award" colorClass="icon-yellow" addActiveTab={addActiveTab} />
                        <FileItem title="javascript" icon="fa-award" colorClass="icon-yellow" addActiveTab={addActiveTab} />
                        <FileItem title="learn_to_code" icon="fa-award" colorClass="icon-yellow" addActiveTab={addActiveTab} />
                    </div>
                )}
            </div>
        </div>

    );
}

export default AboutMenuTop;