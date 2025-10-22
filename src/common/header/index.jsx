import Navbar from './Navbar';
import { HeaderStyle } from './style';

const Header = () => {
    return (
        <HeaderStyle>
            <div className="inner">
                <p>
                    <img src="/images/Logo.png" alt="" />
                </p>
                <Navbar />
            </div>
        </HeaderStyle>
    );
};

export default Header;
