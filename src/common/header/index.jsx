import Navbar from './Navbar';
import { HeaderStyle } from './style';

const Header = ({ profileRef, skillRef, textRef, galleryRef, peopleRef }) => {
    return (
        <HeaderStyle>
            <Navbar
                profileRef={profileRef}
                skillRef={skillRef}
                textRef={textRef}
                galleryRef={galleryRef}
                peopleRef={peopleRef}
            />
        </HeaderStyle>
    );
};

export default Header;
