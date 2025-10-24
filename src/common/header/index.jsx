// import { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import { HeaderStyle } from './style';

// const Header = ({ profileRef, skillRef, textRef, galleryRef, peopleRef }) => {
//     const [isScrolled, setIsScrolled] = useState(false);

//     // 스크롤 이벤트 핸들링
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 4200) {
//                 setIsScrolled(true); // 스크롤이 50px 이상 내려가면
//             } else {
//                 setIsScrolled(false); // 스크롤이 50px 이하로 올라가면
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         // Cleanup 이벤트 리스너
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <HeaderStyle className={isScrolled ? 'scrolled' : ''}>
//             <div className="inner">
//                 <Navbar
//                     profileRef={profileRef}
//                     skillRef={skillRef}
//                     textRef={textRef}
//                     galleryRef={galleryRef}
//                     peopleRef={peopleRef}
//                 />
//             </div>
//         </HeaderStyle>
//     );
// };

// export default Header;

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
