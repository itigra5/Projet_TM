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
import Search_2 from "./Pages/Search_2.jsx";
import Scrolling from "./Pages/ScrollingPage.jsx";
import './index.css'
import Welcome from "./Components/welcome.jsx";
import Inscription from "./Components/Inscription";
import Connexion from "./Components/Connexion";


function App(){
    return (
    <div id="body">
        <BrowserRouter>
            <Routes>
                {/* Pages sans Layout */}
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/connexion" element={<Connexion />} />

                
                {/* Pages avec Layout */}
                
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
                    <Route path="Search/:id/:NomCategorie" element={<Search_2/>}></Route>
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