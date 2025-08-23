import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Search_1 from "./Pages/Search_1";
import Home from "./Pages/Home";
import SearchBox from "./Components/SearchBox";
import Add from "./Pages/AddPage";
import Profile from "./Pages/Profile.jsx";
import Cart  from "./Pages/Cart.jsx";
import NotFound from "./Pages/NotFound.jsx"
import PagePat from "./Pages/Patisseuries.jsx";
import Scrolling from "./Pages/ScrollingPage.jsx";
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
                    <Route path="Profile" element={<Profile/>}/>
                    <Route path="Cart" element={<Cart/>}/>  
                    {/* les routes pour les 1ere cat*/}
                    <Route path="Page_pat" element={<PagePat/>}></Route>
                    {/* Toute les routes des 2nd cat */}
                    <Route path="/Scroll" element={<Scrolling/>}></Route>
                    
                    {/* route pour erreur 404, reste la der */}
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;