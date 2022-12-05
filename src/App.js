import '~/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import View3d from './pages/View3d/index';
import About from './pages/About';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
    return (
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
    );
}

export default App;
