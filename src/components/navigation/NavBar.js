import NavLink from "../NavLink";
import NavLinks from "./NavLinks";


function NavBar() {
    return (
        <nav className="primary-bg-color light-border">
            <p id="logo" className="text-off-color">sebastian-benad</p>
            <NavLinks />
            <NavLink title="_contact-me" />
        </nav>
    );
}

export default NavBar;