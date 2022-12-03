import { useState } from 'react';
import { HeaderStyled } from './styled';
import Logo from '~/global/logoUIT.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState([true, false]);
    const navLinkStyle = ({ isActive }) => ({
        display: 'inline-block',
        borderBottom: isActive ? '3px solid blue' : 'none',
    });

    return (
        <div className="d-flex align-items-center px-5 py-3 text-white" style={{ backgroundColor: '#212529' }}>
            <div className="flex-grow-1 d-flex align-items-center">
                <div className="logo-header me-5">
                    <img src={Logo} alt="" />
                </div>
                <div className="text-start">
                    <NavLink to={'/'} style={navLinkStyle}>
                        <div className="d-inline-block">
                            <button className="btn btn-dark px-4 py-2">3D View</button>
                        </div>
                    </NavLink>
                    <NavLink to={'/about'} style={navLinkStyle}>
                        <div className="d-inline-block">
                            <button className="btn btn-dark px-4 py-2 ">Về UIT</button>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div>
                <button className="btn btn-dark">Đăng nhập</button>
            </div>
        </div>
    );
};

export default Header;
