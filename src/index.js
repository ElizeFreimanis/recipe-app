import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FullRecipe from './pages/FullRecipe';

import App from './App';

ReactDOM.render(
    <HashRouter basename='/'>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path=':id' element={<FullRecipe />} />
            </Route>
        </Routes>
    </HashRouter>,
    document.getElementById('root')
);
