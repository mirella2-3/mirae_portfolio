// Navbar.jsx
import { NavStyle } from './style';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Navbar = ({ currentSection }) => {
    const buttons = [
        { id: 'Profile', label: 'Profile' },
        { id: 'Projects', label: 'Projects' },
        { id: 'AboutMe', label: 'About Me' },
    ];

    return (
        <NavStyle>
            {buttons.map((btn) => (
                <button key={btn.id} onClick={() => scrollToSection(btn.id)}>
                    {btn.label}
                    <p className={currentSection === btn.id ? 'active' : ''}>
                        <img src="/images/Intro-image/header.png" alt="" />
                    </p>
                </button>
            ))}
        </NavStyle>
    );
};

export default Navbar;
