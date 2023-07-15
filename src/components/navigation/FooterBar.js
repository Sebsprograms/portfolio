import SocialIcon from "./SocialIcon";

function FooterBar() {
    return (
        <footer className="primary-bg-color light-border">
            <p className="tagline text-off-color">find me on:</p>
            <SocialIcon link='#' iconClass='fa-linkedin' />
            <SocialIcon link='#' iconClass='fa-instagram' />
            <SocialIcon link='#' iconClass='fa-facebook' />
            <SocialIcon link='https://github.com/Sebsprograms' iconClass='fa-github' githubName="@Sebsprograms" />
        </footer>
    );
}

export default FooterBar;