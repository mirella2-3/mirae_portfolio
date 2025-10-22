import { Outlet } from 'react-router-dom';
import Header from './header';

const Layout = () => {
    return (
        <div className="wrap">
            <Header />
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
