// import CardIndex from '../../components/Home/CardIndex';
import EndPage from '../../components/EndPage/EndPage';
import TextPage from '../../components/TextPage/TextPage';
import SkillPage from '../../components/SkillPage/SkillPage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import WorkGallery from '../../components/WorkGallery/WorkGallery';
import { HomeStyle } from './style';
import Intro from '../../components/Home/Intro';
import AboutMe from '../../components/Aboutme/Aboutme';
import Intro2 from '../../components/Home/Intro2';

const Home = () => {
    return (
        <HomeStyle>
            <Intro2 />
            {/* <Intro /> */}
            {/* <CardIndex /> */}
            <ProfilePage />
            <SkillPage />
            <TextPage />
            <WorkGallery />
            <AboutMe />
            <EndPage />
        </HomeStyle>
    );
};

export default Home;
