import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="logo"></div>

            <div className="form m-auto" style={{ width: '400px' }}>
                <div className="formItem mb-3">
                    <label style={{ width: '140px' }}>Tên đăng nhập:</label>
                    <input type="text" />
                </div>
                <div className="formItem">
                    <label style={{ width: '140px' }}>Mật khẩu:</label>
                    <input type="password" />
                </div>
                <p className="text-primary fw-bold">Quên mật khẩu?</p>
                <button className="btn btn-primary">Đăng nhập</button>
            </div>
        </div>
    );
};

export default Login;
