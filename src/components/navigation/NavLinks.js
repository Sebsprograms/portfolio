import NavLink from "./NavLink";

function NavLinks() {
    return (
        <div id="nav-links">
            <NavLink title="_hello" path="/" />
            <NavLink title="_about-me" path="about" />
            <NavLink title="_projects" path="projects" />
        </div>
    );
}

export default NavLinks;