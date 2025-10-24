import EndPage from '../../components/EndPage/EndPage';
import TextPage from '../../components/TextPage/TextPage';
import SkillPage from '../../components/SkillPage/SkillPage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import WorkGallery from '../../components/WorkGallery/WorkGallery';
import { HomeStyle } from './style';
import Intro from '../../components/Home/Intro';
import AboutMe from '../../components/AboutMe/AboutMe';
import People from '../../components/AboutMe/People';

const Home = () => {
    return (
        <HomeStyle>
            <Intro />
            <ProfilePage />
            <SkillPage />
            <TextPage />
            <WorkGallery />
            {/* <AboutMe /> */}
            {/* <EndPage /> */}
            <People />
        </HomeStyle>
    );
};

export default Home;
