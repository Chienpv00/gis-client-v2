import { useState } from 'react';
import { HeaderStyled } from './styled';
import Logo from '~/global/logoUIT.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState([true, false]);
    const navLinkStyle = ({ isActive }) => ({
        display: 'inline-block',
        borderBottom: isActive ? '3px solid blue' : 'none',
    });

    return (
        <div
            className="d-flex align-items-center px-5 py-3 text-white"
            style={{ backgroundColor: '#FFFFFF', 'box-shadow': '1px 1px 6px 1px grey' }}
        >
            <div className="flex-grow-1 d-flex align-items-center">
                <div className="logo-header me-5">
                    <img src={Logo} alt="" />
                </div>
                <div className="text-start">
                    <NavLink to={'/'} style={navLinkStyle}>
                        <div className="d-inline-block">
                            <span className="btn-white text-primary px-4 py-2" style={{ outline: 'none' }}>
                                3D View
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to={'/about'} style={navLinkStyle}>
                        <div className="d-inline-block">
                            <span className="btn-white text-primary px-4 py-2" style={{ outline: 'none' }}>
                                Về UIT
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div>
                <button className="btn btn-white">
                    <NavLink to={'/login'} className="text-decoration-none">
                        <span className="text-primary">Đăng nhập</span>
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default Header;
