import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '~/App';

const Login = () => {
    const data = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };
        console.log(requestOptions);
        fetch('http://localhost:4000/api/user/login', requestOptions)
            .then((res) => res.json())
            .then(
                (result) => {
                    if (result?.data?.id) {
                        data.setUser(result.data);
                        navigate('/');
                    }
                },
                (err) => {}
            );
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value.trim());
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value.trim());
    };
    return (
        <form className="w-25 m-auto">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                </label>
                <input
                    value={email}
                    onChange={handleChangeEmail}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Mật khẩu
                </label>
                <input
                    value={password}
                    onChange={handleChangePassword}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Nhớ tên đăng nhập.
                </label>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                className="btn btn-primary"
            >
                Đăng nhập
            </button>
        </form>
    );
};

export default Login;
