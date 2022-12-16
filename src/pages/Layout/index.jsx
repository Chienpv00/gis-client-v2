import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
const Layout = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container-fluid">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
