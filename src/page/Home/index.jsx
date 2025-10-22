import CardIndex from '../../components/Home/CardIndex';
import EndPage from '../../components/EndPage/EndPage';
import PopupPage from '../../components/PopupPage/PopupPage';
import PortraitPage from '../../components/PortraitPage/PortraitPage';
import ViralPage from '../../components/ViralPage/ViralPage';
import EventPage from '../../components/EventPage/EventPage';
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
            <EventPage />
            <PopupPage />
            <ViralPage />
            <PortraitPage />
            <EndPage />
        </HomeStyle>
    );
};

export default Home;
