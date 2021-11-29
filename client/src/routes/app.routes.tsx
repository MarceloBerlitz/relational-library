import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

export const Courses = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter >
    );
}