import { useEffect, useState } from 'react';
import './Home.css';
import Snake from '../game/Snake';

function Home() {
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

    const sploshStyles = { width: `${screenSize.width / 3.5}px`, height: `${screenSize.height / 2}px` };

    return (
        <div id='background-wrapper'>
            <div id="top-bg-splosh" style={{
                ...sploshStyles,
                right: `${screenSize.width / 5}px`,
                top: `${screenSize.height / 6}px`,
            }}></div>
            <div id="bottom-bg-splosh" style={{
                ...sploshStyles,
                right: `${screenSize.width / 10}px`,
                top: `${screenSize.height / 3}px`,
            }}></div>
            <div id='home-content'>
                <div id='home-text'>
                    <div id='top'>
                        <p><span className='string-text'>'Hello World!'</span> I am</p>
                        <h1 id='name-title'>Sebastian Benad</h1>
                        <h2 id='title-title' className='blue-text'>&gt; Full Stack Developer</h2>
                    </div>

                    <div id='bottom'>
                        <div id='spacer'></div>
                        <div id='spacer'></div>
                        <p className='comment-text'>
                            // Currently working as a Dart & Flutter developer
                        </p>
                        <p className='comment-text'>
                            // Also familiar with:
                        </p>
                        <p className='comment-text'>
                            // JavaScript, Python, React, Express, Flask, Firebase, MongoDB & more
                        </p>
                        <div id='spacer'></div>
                        <p>
                            <span className='blue-text'>
                                const
                            </span> <span className='green-text'>
                                githubUrl
                            </span> = <span ><a className='string-text' href='https://github.com/Sebsprograms'>'https://github.com/Sebsprograms'</a></span>
                        </p>
                    </div>

                </div>
                <div id='home-game'>
                    <Snake />
                </div>
            </div>

        </div >
    );
}

export default Home;