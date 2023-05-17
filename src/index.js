import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Layout from './Layout';

export default function App() {
    return(
       <>
        <div>
             <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
       </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));