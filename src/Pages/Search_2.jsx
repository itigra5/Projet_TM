import React from "react";
import MiniCat from "../Components/MiniCat";
import '../Components/MiniCat.css';
import { useState } from "react";


function Search_2(){
    const [truc] = useState({
        name: "Patiseries francaises",
        image: "https://www.shutterstock.com/shutterstock/photos/2259702503/display_1500/stock-photo-hand-drawn-aesthetic-cute-violet-cake-isolated-cartoon-piece-of-purple-jelly-cake-with-pink-flower-2259702503.jpg"

    });

    return (
        <>
        {categories.map(catt => (
            <>
            <h1 class="BigTitle">{catt.name}</h1>
            <h1 class="Title">Filtrer par</h1>
            <div class="CatMenu">
                <MiniCat name={catt.name} />
            </div>
            </>
        ))}
    </>
    );
}

export default Search_2;