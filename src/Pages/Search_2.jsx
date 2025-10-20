import React, { useState, useEffect } from "react";
import MiniCat from "../Components/MiniCat";
import '../Components/MiniCat.css';
import { useParams } from "react-router-dom";



function Search_2(){

    const [souscategories, setSousCategories] = useState([]);
    const { id, NomCategorie } = useParams();

    useEffect(() => {
      async function loadSousCategories() {
        try {
            const res = await fetch(`http://localhost:3000/categories/${id}/${NomCategorie}`);
            const data = await res.json();
            setSousCategories(data);
            console.log("Params:", { id, NomCategorie });
          } catch (err) {
            console.error('Erreur :', err);
          }
        }
        loadSousCategories();
      }, [id]);

    return (
      <>
      <h1 className="BigTitle">{NomCategorie}</h1>
      <h1 className="Title">Filtrer par</h1>
      <div className="CatMenu">
      {souscategories.map(catt => (
        <div key={catt.idSousCategorie}>
          <MiniCat name={catt.NomSousCategorie} />
        </div>
      ))}
      </div>
    </>
    );
}

export default Search_2;