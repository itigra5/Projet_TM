import React from "react";
import { useState } from "react";
import MiniLising from "../Components/MiniLising";
import '../Components/Minilising.css';

function Home() {
    const [annonces] = useState([
        {
            id :1,
            title : "Pancakes",
            user : "Tamer",
            image : "https://www.tasteofhome.com/wp-content/uploads/2024/09/Buttermilk-Pancakes_EXPS_TOHVP24_33639_MF_08_15_1_RMS.jpg?fit=300,300&webp=1"
        },
        {
            id :2,
            title : "crepes",
            user : "Jean?",
            image : "https://sallysbakingaddiction.com/wp-content/uploads/2023/06/homemade-crepes-1-1024x1536.jpg"
        },
        {
            id :3,
            title : "Pancakes",
            user : "Tamer",
            image : "https://www.tasteofhome.com/wp-content/uploads/2024/09/Buttermilk-Pancakes_EXPS_TOHVP24_33639_MF_08_15_1_RMS.jpg?fit=300,300&webp=1"
        },
        {
            id :4,
            title : "crepes",
            user : "Jean?",
            image : "https://sallysbakingaddiction.com/wp-content/uploads/2023/06/homemade-crepes-1-1024x1536.jpg"
        }
    ]);
    return(
        <>
        <h1 class="Title">Autour de vous</h1>
        {/* Curly braces to insert JS*/}
        <div class="tktfrr">
                {annonces.map(a => (
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
                {annonces.map(a => (
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