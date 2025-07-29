import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Search_1 from "./Pages/Search_1";
import Home from "./Pages/Home";
import SearchBox from "./Components/SearchBox";
import Add from "./Pages/AddPage";
import NotFound from "./Pages/NotFound.jsx"
import './index.css'


function App(){
    return (
    <div id="body">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                {/* Pages avec searchBox ici, et le rest en dehors (idée originale hehehe) */}
                    <Route element={<SearchBox/>}>
                        {/* index means that this route will render when we call the parent */}
                        <Route index element={<Home/>}/>
                        <Route path="Search_1" element={<Search_1/>} />
                    </Route>
                    <Route path="Add" element={<Add/>}/>
                    {/* route pour erreur 404, reste la der */}
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;