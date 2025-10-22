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
            <button onClick={() => scrollToSection('About Me')}>About Me </button>
            <button onClick={() => scrollToSection('Projects')}>Projects</button>
            <button onClick={() => scrollToSection('Former-company')}>Former-company</button>
            <button onClick={() => scrollToSection('Portrait Retouching')}>
                Portrait Retouching
            </button>
        </NavStyle>
    );
};

export default Navbar;
