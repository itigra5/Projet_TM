import React, { useState, useEffect } from "react";
import CatSection from "../Components/CategoriesSection";

function Search_1() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch("http://localhost:3000/categories");
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erreur :", err);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  return (
    <>
      <h1 className="Title">Achat par catégories</h1>

      <div id="Categories">
        {loading && <p>Chargement…</p>}

        {!loading && categories.length === 0 && (
          <p>Aucune catégorie trouvée.</p>
        )}

        {!loading &&
          categories.map((cat) => (
            <CatSection
              key={cat.idCategorie}
              titre={cat.NomCategorie}
              lien={`/Search/${cat.idCategorie}/${cat.NomCategorie}`}
              id={cat.idCategorie}
              // image={cat.ImagePhone}  
            />
          ))}
      </div>
    </>
  );
}

export default Search_1;