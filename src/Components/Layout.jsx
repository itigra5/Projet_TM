import React from "react";
import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar";
import './NavBar.css'

function Layout(){
    return(
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    );

}

export default Layout;