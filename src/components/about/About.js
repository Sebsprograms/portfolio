import './About.css';

function About() {
    return (
        <div id="about-wrapper" >
            <div id='about-leftbar'></div>
            <div id='about-menu' className='light-border-left'>
                <div id='about-menu-top'>
                    <div className='light-border-bottom info-bar'><p>personal-info</p></div>
                    <div id='about-menu-folders'>
                        <p>folder 1</p>
                        <p>folder 2</p>
                    </div>
                </div>
                <div id='about-menu-bottom'>
                    <div className='light-border-bottom info-bar'><p>contact</p></div>
                    <div id='about-menu-folders'>
                        <p>+# (###) ###-####</p>
                        <p>sample@email.com</p>
                    </div>
                </div>
            </div>
            <div id='about-content' className='light-border-left'>
                <div id='about-content-top-bar' className='light-border-bottom info-bar'>

                </div>
                <div id='about-content-content'>

                </div>
            </div>
            <div id='about-showcase' className='light-border-left'>
                <div id='about-showcase-top-bar' className='light-border-bottom info-bar'>

                </div>
                <div id='about-showcase-content'>

                </div>
            </div>
        </div>
    );
}

export default About;