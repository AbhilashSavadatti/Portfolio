import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/AbhilashSavadatti' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>


            <a href='https://linkedin.com/in/abhilashsavadatti' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>


        </div>
    );
};

export default HeaderSocials;