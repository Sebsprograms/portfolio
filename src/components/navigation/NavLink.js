import { Link, useLocation } from "react-router-dom";

function NavLink(props) {
    const location = useLocation();
    const currentPath = location.pathname.replace('/', '');
    const linkPath = props.path.replace('/', '')

    return (
        <Link className={`light-border-left nav-link text-off-color 
        ${currentPath === linkPath ? 'active' : ''} 
        ${props.title === '_contact-me' ? 'right-nav-link' : ''} 
        ${props.title === '_projects' ? 'light-border-right' : ''}`} to={props.path}>{props.title}</Link>
    );
}

export default NavLink;