import { Link, useLocation } from "react-router-dom";

function NavLink(props) {
    const location = useLocation();
    const currentPath = location.pathname.replace('/', '');
    const linkPath = props.path.replace('/', '')

    return (
        <Link className={`light-border nav-link text-off-color ${currentPath === linkPath ? 'active' : ''}`} to={props.path}>{props.title}</Link>
    );
}

export default NavLink;