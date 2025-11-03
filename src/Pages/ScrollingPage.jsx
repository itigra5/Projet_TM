import React, { useState, useEffect } from "react";
import AnnonceSwip from "../Components/AnnonceSwip";

function Scrolling() {
    const [produit, setProduit] = useState([]);

    useEffect(() => {
        async function loadProduct() {
            try{
                const res = await fetch("/articles");
                const data = await res.json();
                setProduit(data);
            }catch(err){
        console.error('Erreur :', err);
            }
        }

        // Appeler les fonctions
        loadProduct();
        
    }, [])

  return (
    <div className="scrollPage">
      {produit.map((a) => (
    <section className="Slide" key={a.idProduit}>
        <AnnonceSwip
          nameHigh={a.NomProduit}
          images={a.photos?.map((p) => p.Images) || []}
          desc={a.Description}
          profil_picture={a.vendeur?.Photo_de_profil}
          name={a.vendeur?.Nom}
          city={a.vendeur?.Adresse}
          stars={a.vendeur?.Nombre_etoile}
      />
    </section>
))}
    </div>
  );
}

export default Scrolling;
