import React, { useState } from "react";

import './About.css';

function AboutMenu() {
    let [showPersonalInfo, setShowPersonalInfo] = useState(true);
    let personalInfoStyle = { display: showPersonalInfo ? 'block' : 'none' }
    function togglePersonalInfo() {
        setShowPersonalInfo(prev => !prev);
    }

    let [showContact, setShowContact] = useState(true);
    let showContactStyle = { display: showContact ? 'block' : 'none' }
    function toggleContact() {
        setShowContact(prev => !prev);
    }

    let [showCredentials, setShowCredentials] = useState(false);
    let showCredentialsStyle = { display: showContact ? 'block' : 'none' }
    function toggleCredentials() {
        setShowCredentials(prev => !prev);
    }

    return (
        <div id='about-menu' className='light-border-left'>
            <div id='about-menu-top'>
                <div onClick={togglePersonalInfo} className='light-border-bottom info-bar'>{showPersonalInfo ? <i className="menu-icon fa-solid fa-angle-down"></i> : <i className="menu-icon fa-solid fa-angle-right"></i>}<p>personal-info</p></div>
                <div style={personalInfoStyle} id='about-menu-folders'>
                    <div className="file-item">
                        <i class="icon-red fa-solid fa-file"></i>
                        <p>about</p>
                    </div>
                    <div className="file-item">
                        <i class="icon-green fa-solid fa-file-word"></i>
                        <p>experience</p>
                    </div>
                    <div className="file-item">
                        <i class="icon-blue fa-solid fa-file-export"></i>
                        <p>interests</p>
                    </div>
                    <div onClick={toggleCredentials} className="file-item">
                        {showCredentials ? <i class="menu-icon fa-solid fa-folder-open"></i> : <i class="menu-icon fa-solid fa-folder"></i>}
                        <p>credentials</p>
                    </div>
                    {showCredentials && (
                        <ul>
                            <li>Certificate 1</li>
                            <li>Certificate 2</li>
                            <li>Certificate 3</li>
                        </ul>
                    )}
                </div>
            </div>
            <div id='about-menu-bottom'>
                <div onClick={toggleContact} className={`light-border-bottom ${showPersonalInfo ? 'light-border-top' : ''} info-bar`}>{showContact ? <i className="menu-icon fa-solid fa-angle-down"></i> : <i className="menu-icon fa-solid fa-angle-right"></i>}<p>contact</p></div>
                <div style={showContactStyle} id='about-contact'>
                    <div className="file-item">
                        <i className="menu-icon fa-solid fa-phone"></i>
                        <p>+1 403 461-5459</p>
                    </div>
                    <div className="file-item">
                        <i className="menu-icon fa-solid fa-envelope"></i>
                        <p>sebastianbenad72@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutMenu;