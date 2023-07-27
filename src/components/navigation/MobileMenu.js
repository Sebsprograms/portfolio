import React from "react";
import NavLink from "./NavLink";

function MobileMenu() {
    console.log('It is running');
    return <div id="mobile-menu">
        <NavLink title="_hello" path="/" />
        <NavLink title="_about-me" path="about" />
        <NavLink title="_projects" path="projects" />
        <NavLink title="_contact-me" path='contact' />
    </div>
}

export default MobileMenu;