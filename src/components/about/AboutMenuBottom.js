import { useState } from 'react';
import './About.css';
import FileItem from "./FileItem";

function AboutMenuBottom({ showPersonalInfo }) {
    let [showContact, setShowContact] = useState(true);
    let showContactStyle = { display: showContact ? 'block' : 'none' }
    function toggleContact() {
        setShowContact(prev => !prev);
    }
    return (
        <div id='about-menu-bottom'>
            <div onClick={toggleContact} className={`light-border-bottom ${showPersonalInfo ? 'light-border-top' : ''} info-bar`}>{showContact ? <i className="menu-icon fa-solid fa-angle-down"></i> : <i className="menu-icon fa-solid fa-angle-right"></i>}<p>contact</p></div>
            <div style={showContactStyle} id='about-contact'>
                <FileItem icon="fa-phone" title="+1 403 461-5459" />
                <FileItem icon="fa-envelope" title="sebastianbenad72@gmail.com" />
            </div>
        </div>
    );
}

export default AboutMenuBottom;