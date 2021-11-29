import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

export const Courses = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" >
                    <Login />
                </Route>
                <Route path="/home" >
                    <Home />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}