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
            <button onClick={() => scrollToSection('Profile')}>
                Profile
                <p>
                    <img src="/images/Intro-image/header.png" alt="" />
                </p>
            </button>
            <button onClick={() => scrollToSection('Projects')}>
                Projects
                <p>
                    <img src="/images/Intro-image/header.png" alt="" />
                </p>
            </button>
            <button onClick={() => scrollToSection('AboutMe')}>
                About Me
                <p>
                    <img src="/images/Intro-image/header.png" alt="" />
                </p>
            </button>
        </NavStyle>
    );
};

export default Navbar;
