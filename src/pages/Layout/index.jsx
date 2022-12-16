import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/Header';

const Layout = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container-fluid p-0">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
