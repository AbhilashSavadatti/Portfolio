import React from 'react';
import './About.css';
import Image from '../../assets/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif'
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
<p className="about__description">
  Hello! I'm Abhilash A Savadatti, and I'm based in Karnataka, India. I’m currently in my third year of pursuing a B.Tech in Computer Science and Engineering at SDM Institute of Technology, Ujire.<br /><br />
  My journey so far has been enriching, and I’m excited about the opportunities ahead. At this stage, I'm focusing on expanding my portfolio by working on various projects and striving to be a valuable team player in my current role.<br /><br />
  Here are a few technologies I’ve been working with recently:
</p>


                        <ul className="about__list">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Spring boot</li>
                            <li>MySQL</li>
                           
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About