import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

export default function Design() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Design />, document.getElementById('root'));