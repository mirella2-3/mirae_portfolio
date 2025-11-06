import Navbar from './Navbar';
import { HeaderStyle } from './style';

const Header = ({ currentSection }) => {
    return (
        <HeaderStyle>
            <Navbar currentSection={currentSection} />
        </HeaderStyle>
    );
};

export default Header;
