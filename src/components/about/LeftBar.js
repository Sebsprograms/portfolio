import React, { useState } from "react";

import './About.css';

function LeftBar() {


    return (
        <div id='about-leftbar'>
            <i className="left-bar-icon fa-solid fa-code"></i>
            <i className="left-bar-icon fa-solid fa-code-branch"></i>
            <i className="left-bar-icon fa-regular fa-file-code"></i>
        </div>
    );
}

export default LeftBar;