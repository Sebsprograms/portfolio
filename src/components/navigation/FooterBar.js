import { useEffect, useState } from 'react';
import SocialIcon from "./SocialIcon";

function FooterBar() {
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
    }, [screenSize])

    return (

        (screenSize.width > 1000) ? (
            <footer className="primary-bg-color light-border">
                <p className="tagline text-off-color">find me on:</p>
                <SocialIcon link='#' iconClass='fa-linkedin' />
                <SocialIcon link='#' iconClass='fa-instagram' />
                <SocialIcon link='#' iconClass='fa-facebook' />
                <SocialIcon link='https://github.com/Sebsprograms' iconClass='fa-github' githubName="@Sebsprograms" />
            </footer>
        ) : <></>

    );
}

export default FooterBar;