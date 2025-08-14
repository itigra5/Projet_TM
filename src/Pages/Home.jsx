import React from "react";
import { useState } from "react";
import MiniLising from "../Components/MiniLising";
import '../Components/Minilising.css';
import myData from '../Data.json';

function Home() {

    return(
        <>
        <h1 class="Title">Autour de vous</h1>
        {/* Curly braces to insert JS*/}
        <div class="tktfrr">
                {myData.annonces.map(a => (
                    <MiniLising
                    key={a.id}
                    title={a.title}
                    image={a.image}
                    />
                )
            )
        } 
        </div>
        <h1 class="Title">Recomendé pour vous</h1>
        <div class="tktfrr">
                {myData.annonces.map(a => (
                    <MiniLising
                    key={a.id}
                    title={a.title}
                    image={a.image}
                    />
                )
            )
        } 
        </div>
    </>
    );

}

export default Home;