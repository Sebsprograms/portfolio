
function SocialIcon(props) {
    return (
        <a href={props.link} className={"light-border text-off-color footer-icon " + (props.githubName ? 'github-icon' : 'social-icon')} target="_blank">
            <i className={`fa-brands ${props.iconClass}`}></i>
            {props.githubName && <p className="icon-title">{props.githubName}</p>}
        </a>
    );
}

export default SocialIcon;