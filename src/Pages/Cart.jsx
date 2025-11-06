import React, { useState, useMemo, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import CompCart from "../Components/CompCart.jsx";
import "../Components/CompCart.css";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [iduser, setIduser] = useState(null);
  const [panier, setPanier] = useState([]);
  const [loading, setLoading] = useState(true);





  // --- gestion quantité / suppression ---
  async function handleIncreaseQty() {
    try{

    }catch(err){
      console.error('Erreur :', err)
    }
  };

  async function handleDecreaseQty() {
    try{

    }catch(err){
      console.error('Erreur :', err)
    }
    };

  async function handleDeleteItem() {
    try{

    }catch(err){
      console.error('Erreur :', err)
    }
    };


  // --- total général ---
  const totalPanier = useMemo(() => {
    return
  }, []);


useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const userId = decoded.id_user;
      setIduser(userId);
    } catch (err) {
      console.error("Token invalide :", err);
    }
  }
}, []);

    useEffect(() => {
    if (!iduser) return;
      async function loadPanier() {
        try {
            const res = await fetch(`/panier/${iduser}`);
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
      }, [iduser]);

if (loading) return <p>Chargement du panier...</p>;

  return (
    <>
      <h1 className="Title">Mon panier</h1>

      {panier.map(it => (
         it.produit && it.produit.vendeur ? (
        <CompCart
          key={`${it.idUser_panier}-${it.idProduit_panier}`} // <--- clé unique
          id={it.idUser_panier}
          // link={it.link}
          img={it.produit.photos && it.produit.photos.length > 0 ? it.produit.photos[0].Images : "placeholder.jpg"}
          name={it.produit.NomProduit}
          user={it.produit.vendeur.Nom}
          pp="https://res.cloudinary.com/dd9c0kmvh/image/upload/v1762464935/download_qdaxsv.png"
          quantity={it.quantity}
          price={it.produit.Prix}
          onIncrease={handleIncreaseQty}
          onDecrease={handleDecreaseQty}
          onDelete={handleDeleteItem}
        />
        ) : null
      ))}

      {/* --- FOOTER FIXE --- */}
      <div className="CartFooter">
        <div className="CartFooter__row">
          <span className="CartFooter__label">TOTAL</span>
          {/* <span className="CartFooter__amount">CHF {totalPanier.toFixed(2)}</span> */}
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