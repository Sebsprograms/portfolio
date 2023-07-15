import { Link } from "react-router-dom";

function NavLink(props) {
    return (
        <Link className="active light-border nav-link text-off-color" to={props.path}>{props.title}</Link>
    );
}

export default NavLink;