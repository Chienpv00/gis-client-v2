import '~/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import View3d from './pages/View3d/index';
import About from './pages/About';
import Admin from './pages/Admin';
import Login from './pages/Login';
import React, { useState } from 'react';
export const UserContext = React.createContext(null);

function App() {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<View3d />} />
                        <Route path="about" element={<About />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="login" element={<Login />} />
                        <Route path="*" element={<p>404</p>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
