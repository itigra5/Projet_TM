import React, {useState, useEffect} from "react";
import CatSection from "../Components/CategoriesSection";


function Search_1(){

    const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch("http://localhost:3000/categories");
        const data = await res.json();
        setCategories(data); // on stocke dans le state
      } catch (err) {
        console.error('Erreur :', err);
      }
    }
    loadCategories();
  });
    return (
        <>
        <h1 class="Title">Achat par catégories</h1>
        <div id="Categories">
        {categories.map(cat => (
            <CatSection
            titre={cat.NomCategorie}
            lien="/Search_2"
            image={cat.ImagePhone}
            id={cat.idCategorie}
            />
        ))}
    </div>
    </>
    );
}

export default Search_1;