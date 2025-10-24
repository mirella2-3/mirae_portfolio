// Navbar.jsx
import { NavStyle } from './style';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Navbar = () => {
    return (
        <NavStyle>
            <button onClick={() => scrollToSection('Profile')}>Profile</button>
            <button onClick={() => scrollToSection('Projects')}>Projects</button>
            <button onClick={() => scrollToSection('AboutMe')}>About Me</button>
        </NavStyle>
    );
};

export default Navbar;
