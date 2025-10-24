import React from 'react';
import { NavStyle } from './style';

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <NavStyle>
            <button onClick={() => scrollToSection('Profile')}>Profile </button>
            <button onClick={() => scrollToSection('Projects')}>Projects</button>
            <button onClick={() => scrollToSection('About Me')}>About Me</button>
        </NavStyle>
    );
};

export default Navbar;
