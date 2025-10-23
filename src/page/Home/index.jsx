import CardIndex from '../../components/Home/CardIndex';
import EndPage from '../../components/EndPage/EndPage';
import TextPage from '../../components/TextPage/TextPage';
import SkillPage from '../../components/SkillPage/SkillPage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import WorkGallery from '../../components/WorkGallery/WorkGallery';
import { HomeStyle } from './style';

const Home = () => {
    return (
        <HomeStyle>
            <CardIndex />
            <ProfilePage />
            <SkillPage />
            <TextPage />
            <WorkGallery />

            <EndPage />
        </HomeStyle>
    );
};

export default Home;
