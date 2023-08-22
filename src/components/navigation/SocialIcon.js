
function SocialIcon(props) {
    let isMobileWidth = props.windowWidth < 600;
    return (
        <a href={props.link} className={`light-border-left text-off-color footer-icon 
        ${(props.githubName ? 'github-icon' : 'social-icon')}
        ${(((props.iconClass === 'fa-facebook' && !isMobileWidth) || (props.iconClass === 'fa-github' && isMobileWidth)) ? 'light-border-right' : '')}`} target="_blank">
            <i className={`fa-brands ${props.iconClass}`}></i>
            {props.githubName && <p className="icon-title">{props.githubName}</p>}
        </a>
    );
}

export default SocialIcon;