import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnnonceSwip from "./AnnonceSwip";

function Annonce() {
    const { id } = useParams();
    const [produit, setProduit] = useState(null);

    useEffect(() => {
        async function fetchProduit() {
            const res = await fetch(`http://localhost:3000/articles/${id}`);
            const data = await res.json();
            setProduit(data);
        }
        fetchProduit();
    }, [id]);

    if (!produit) return <p>Chargement...</p>;

    return (
        <div className="scrollPage">
    <section className="Slide" key={produit.idProduit}>
        <AnnonceSwip
          nameHigh={produit.NomProduit}
          images={produit.photos?.map((p) => p.Images) || []}
          desc={produit.Description}
          profil_picture={produit.vendeur?.Photo_de_profil}
          name={produit.vendeur?.Nom}
          city={produit.vendeur?.Adresse}
          stars={produit.vendeur?.Nombre_etoile}
          produitID={produit.idProduit}
      />
    </section>
    </div>
    );
}

export default Annonce;