import { useEffect, useState } from 'react';
import NavLink from "./NavLink";
import NavLinks from "./NavLinks";
import Hamburger from 'hamburger-react';
import MobileMenu from './MobileMenu';


function NavBar(props) {
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
    }, [screenSize]);

    const [isMenuOpen, setMenuOpen] = useState(false);
    let isMobileWidth = screenSize.width < 1000;

    return (
        <nav className="primary-bg-color light-border">
            <div id='nav-wrapper'>
                <div className="tagline">
                    <p className="text-off-color">sebastian-benad</p>
                </div>
                {
                    isMobileWidth ? <Hamburger rounded className='hamburger' color="#607B96" toggled={isMenuOpen} toggle={setMenuOpen} duration={0.8} />
                        :
                        (<div id='link-bar'>
                            <NavLinks />
                            <NavLink title="_contact-me" path='contact' />
                        </div>)

                }
            </div>
            {(isMenuOpen && isMobileWidth) ? <MobileMenu /> : <></>}
        </nav >
    );
}

export default NavBar;