import NavLink from "./NavLink";
import NavLinks from "./NavLinks";


function NavBar() {
    return (
        <nav className="primary-bg-color light-border">
            <p className="tagline text-off-color">sebastian-benad</p>
            <NavLinks />
            <NavLink title="_contact-me" path='contact' />
        </nav>
    );
}

export default NavBar;