import React from "react";
import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar";
import Header from "./header";
import './Layout.css'

function Layout(){
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <NavBar/>
        </>
    );

}

export default Layout;