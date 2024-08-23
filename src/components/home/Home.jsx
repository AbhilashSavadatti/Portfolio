import React from 'react';
import './Home.css';
import Me from '../../assets/A01.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Abhilash A Savadatti</h1>
                <span className="home__education">I'm a Software Developer</span>
<div className="centerd">
 <HeaderSocials />
</div>
               

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home