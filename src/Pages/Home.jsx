import React, {useState, useEffect} from "react";
import MiniLising from "../Components/MiniLising";
import '../Components/MiniLising.css';
import { useParams } from "react-router-dom";
import myData from '../Data.json';

function Home() {
    const [produit, setProduit] = useState([]);

    useEffect(() => {
        async function loadProduct() {
            try{
                const res = await fetch(`/articles`);
                const data = await res.json();
                setProduit(data);
            }catch(err){
        console.error('Erreur :', err);
            }
        }

        // Appeler les fonctions
        loadProduct();
        
    }, [])


    return(
        <>
        <h1 class="Title">Autour de vous</h1>
        {/* Curly braces to insert JS*/}
        <div class="tktfrr">
                {produit.map(a => (
                    <MiniLising
                    key={a.idProduit}
                    link={`/articles/${a.idProduit}`}
                    title={a.NomProduit}
                    image={a.photos && a.photos.length > 0 ? a.photos[0].Images : "placeholder.jpg"}
                    />
                )
            )
        } 
        </div>
        <h1 class="Title">Recomandé pour vous</h1>
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