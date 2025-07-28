import React from "react";
import './SearchBox.css'
import { Outlet } from "react-router-dom";

function SearchBox(){
    return (
        <>
        <div id="ContSearch">
            <input type="search" name="q" id="SearchInput" placeholder="Que cherchez-vous ?"/>
            <button id="SearchButton"> Q </button>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    );
}

export default SearchBox;