import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Intro from '../../components/Home/Intro';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import SkillPage from '../../components/SkillPage/SkillPage';
import TextPage from '../../components/TextPage/TextPage';
import WorkGallery from '../../components/WorkGallery/WorkGallery';
import People from '../../components/AboutMe/People';
import { HomeStyle } from './style';

const Home = () => {
    const { setShowHeader, setCurrentSection } = useOutletContext();

    useEffect(() => {
        const handleScroll = () => {
            const intro = document.querySelector('section#Intro');
            const profile = document.querySelector('section#Profile');
            const projects = document.querySelector('section#Projects');
            const about = document.querySelector('section#AboutMe');

            const scrollY = window.scrollY;
            const offset = 100; // 조금 빨리 바뀌게 하는 여유값

            if (intro && scrollY < intro.offsetHeight - offset) {
                setShowHeader(false);
                setCurrentSection('');
            } else {
                setShowHeader(true);

                if (profile && scrollY < profile.offsetTop + profile.offsetHeight - offset) {
                    setCurrentSection('Profile');
                } else if (
                    projects &&
                    scrollY < projects.offsetTop + projects.offsetHeight - offset
                ) {
                    setCurrentSection('Projects');
                } else if (about) {
                    setCurrentSection('AboutMe');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 상태 확인

        return () => window.removeEventListener('scroll', handleScroll);
    }, [setShowHeader, setCurrentSection]);

    return (
        <HomeStyle>
            <section id="Intro">
                <Intro />
            </section>

            <section id="Profile">
                <ProfilePage />
                <SkillPage />
            </section>

            <section id="Projects">
                <TextPage />
                <WorkGallery />
            </section>

            <section id="AboutMe">
                <People />
            </section>
        </HomeStyle>
    );
};

export default Home;
