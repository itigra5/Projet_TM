import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import FavorisPage from "./Pages/FavorisPage.jsx";
import Annonce from "./Components/AnnonceSwip.jsx";
import Protection from "./Components/protection.jsx";

function App(){
    return (
    <div id="body">
        <BrowserRouter>
            <Routes>
                {/* Pages sans Layout */}
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/connexion" element={<Connexion />} />

                {/* pages prétegé */}
                <Route
                        path="/"
                        element={
                            <Protection>
                                <Home/>
                            </Protection>
                        }/>

                {/* Pages avec Layout */}
                
                {/* Pages avec searchBox ici, et le rest en dehors (idée originale hehehe) */}
                    <Route element={<SearchBox/>}>
                        {/* index means that this route will render when we call the parent */}
                        <Route index element={<Home/>}/>
                        <Route path="Search_1" element={ <Protection><Search_1/> </Protection>} />
                    </Route>
                    <Route path="/produit/:id" element={ <Protection><Annonce /> </Protection>} />
                    <Route path="favoris" element={ <Protection><FavorisPage/> </Protection>} />
                    <Route path="Add" element= { <Protection><Add/> </Protection>}/>
                    <Route path="Profile/:id" element={<Protection><Profile/> </Protection>}/>
                    <Route path="Cart" element={<Protection><Cart/> </Protection>}/>  
                    <Route path="Search/:id/:NomCategorie" element={<Protection><Search_2/> </Protection>}></Route>
                    <Route path="/Scroll" element={<Protection><Scrolling/></Protection>}></Route>
                    
                    {/* route pour erreur 404, reste la der */}
                    <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;