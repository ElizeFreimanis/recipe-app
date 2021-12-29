import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FullRecipe from './pages/FullRecipe';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/recipe-app/' element={<App />}>
                <Route index element={<Home />} />
                <Route path=':id' element={<FullRecipe />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
