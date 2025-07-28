import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Search_1 from "./Pages/Search_1";
import Home from "./Pages/Home";
import './index.css'


function App(){
    return (
    <div id="body">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/* index means that this route will render when we call the parent */}
                    <Route index element={<Home/>}/>
                    <Route path="Search_1" element={<Search_1/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;