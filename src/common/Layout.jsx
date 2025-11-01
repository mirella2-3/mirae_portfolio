import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';

const Layout = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [currentSection, setCurrentSection] = useState(''); // 현재 섹션 상태

    return (
        <div className="wrap">
            {showHeader && <Header currentSection={currentSection} />}

            <main className="main">
                <Outlet context={{ setShowHeader, setCurrentSection }} />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
