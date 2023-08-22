import React from "react";
import NavLink from "./NavLink";
import SocialIcon from "./SocialIcon";
import { useState, useEffect } from "react";

function MobileMenu() {
    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    let isMobileWidth = screenSize.width > 600;

    return <div id="mobile-menu">
        <div id="mobile-links">

            <NavLink title="_hello" path="/" />
            <NavLink title="_about-me" path="about" />
            <NavLink title="_projects" path="projects" />
            <NavLink title="_contact-me" path='contact' />
        </div>
        <div id="mobile-footer" className="light-border">
            {isMobileWidth ? <p className="tagline-footer text-off-color">find me on:</p> : <></>}
            <SocialIcon windowWidth={getCurrentDimension().width} link='#' iconClass='fa-linkedin' />
            <SocialIcon windowWidth={getCurrentDimension().width} link='#' iconClass='fa-instagram' />
            <SocialIcon windowWidth={getCurrentDimension().width} link='#' iconClass='fa-facebook' />
            <SocialIcon windowWidth={getCurrentDimension().width} link='https://github.com/Sebsprograms' iconClass='fa-github' githubName={isMobileWidth ? "Sebsprograms" : ""} />
        </div>
    </div>
}

export default MobileMenu;