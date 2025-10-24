import TextPage from '../../components/TextPage/TextPage';
import SkillPage from '../../components/SkillPage/SkillPage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import WorkGallery from '../../components/WorkGallery/WorkGallery';
import { HomeStyle } from './style';
import Intro from '../../components/Home/Intro';

import People from '../../components/AboutMe/People';
import Intro0 from '../../components/Home/Intro0';

const Home = () => {
    return (
        <HomeStyle>
            <Intro0 />
            <Intro />
            <section id="Profile">
                <ProfilePage />
            </section>

            <SkillPage />

            <section id="Projects">
                <TextPage />
            </section>
            <WorkGallery />

            <section id="AboutMe">
                <People />
            </section>
        </HomeStyle>
    );
};

export default Home;
