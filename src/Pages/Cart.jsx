import React, { useState, useMemo, useEffect } from "react";
import CompCart from "../Components/CompCart.jsx";
import "../Components/CompCart.css";
import { useAuth } from "../Components/AuthContext";



export default function Cart() {
  const [panier, setPanier] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userId } = useAuth();


    useEffect(() => {
    if (!userId) return;
      async function loadPanier() {
        try {
            const res = await fetch(`http://localhost:3000/panier/${userId}`);
            const data = await res.json();
            console.log(data)
            setPanier(data);
          } catch (err) {
            console.error('Erreur :', err);
          }finally {
            setLoading(false);
        }   
        }
        loadPanier();
      }, [userId]);




  // --- gestion quantité / suppression ---
  async function handleIncreaseQty(produitId) {
    try{
      const res = await fetch(`/panier/increase/${userId}/${produitId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Erreur lors de l'ajout ");

    // Mets à jour en local
    setPanier(prev =>
      prev.map(it =>
      it.idUser_panier === userId && it.idProduit_panier === produitId
      ? { ...it, Quantity: it.Quantity + 1 } // incrémente localement
      : it
  )
);

    }catch(err){
      console.error('Erreur :', err)
    }
  };

  async function handleDecreaseQty(produitId, qty) {
    if (qty === 1){return}
    try{
      const res = await fetch(`/panier/decrease/${userId}/${produitId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Erreur lors du  desajout ");

    // Mets à jour en local
    setPanier(prev =>
      prev.map(it =>
      it.idUser_panier === userId && it.idProduit_panier === produitId
      ? { ...it, Quantity: it.Quantity - 1 } // decrémente localement
      : it
  )
);

    }catch(err){
      console.error('Erreur :', err)
    }
  };

  async function handleDeleteItem(produitId) {
    try{
      const res = await fetch(`/panier/${userId}/${produitId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Erreur lors de la suppression");

    // Mets à jour l'état local
    setPanier(panier.filter(it => 
      !(it.idUser_panier === userId && it.idProduit_panier === produitId)
    ));

    }catch(err){
      console.error('Erreur :', err)
    }
    };


  // --- total général ---
  const totalPanier = useMemo(() => {
    return panier.reduce((acc, item) => acc + (Number(item.Quantity) || 0) * (item.produit?.Prix ? Number(item.produit.Prix) : 0), 0);
  }, [panier]);


if (loading) return <p>Chargement du panier...</p>;

  return (
    <>
      <h1 className="Title">Mon panier</h1>

      {panier.map(it => (
         it.produit && it.produit.vendeur ? (
        <CompCart
          key={`${it.idUser_panier}-${it.idProduit_panier}`} // <--- clé unique
          iduser={it.idUser_panier}
          idproduit={it.idProduit_panier}
          // link={it.link}
          img={it.produit.photos && it.produit.photos.length > 0 ? it.produit.photos[0].Images : "placeholder.jpg"}
          name={it.produit.NomProduit}
          user={it.produit.vendeur.Nom}
          pp="https://res.cloudinary.com/dd9c0kmvh/image/upload/v1762464935/download_qdaxsv.png"
          quantity={Number(it.Quantity)}
          price={Number(it.produit.Prix)}
          onIncrease={() => handleIncreaseQty(it.idProduit_panier)}
          onDecrease={() => handleDecreaseQty(it.idProduit_panier, it.Quantity)}
          onDelete={() => handleDeleteItem(it.idProduit_panier)}
        />
        ) : null
      ))}

      {/* --- FOOTER FIXE --- */}
      <div className="CartFooter">
        <div className="CartFooter__row">
          <span className="CartFooter__label">TOTAL</span>
          <span className="CartFooter__amount">CHF {totalPanier.toFixed(2)}</span> 
        </div>

        <button
          className="CartFooter__cta"
          onClick={() => console.log("continuer / aller au paiement")}
        >
          CONTINUER
        </button>
      </div>
      
    </>
  );
}