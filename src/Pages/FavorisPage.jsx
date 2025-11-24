import { useState, useEffect } from "react";
import FavItem from "../Components/FavItem.jsx";          // <-- bon import
import myData from "../Data.json";
import "../Components/FavorisPage.css";
import { useAuth } from "../Components/AuthContext";


export default function FavorisPage() {
  const [favorites, setFavorites] = useState(
    myData.favorites ?? [
      {
        id: 1,
        title: "Muffins très bons",
        img: "https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp",
        seller: { name: myData.user?.[1]?.name, avatar: myData.user?.[1]?.profil_picture },
        price: 2.5,
      },
    ]
  );
  const [loading, setLoading] = useState(true);

  const { userId } = useAuth();

  // --- état modale quantité ---
  const [showQty, setShowQty] = useState(false);
  const [qty, setQty] = useState(1);
  const [currentItem, setCurrentItem] = useState(null);

  const openQty = (item) => {
    setCurrentItem(item);
    setQty(1);
    setShowQty(true);
  };


  // fonctions___

  const closeQty = () => setShowQty(false);



    useEffect(() => {
    if (!userId) return;
      async function loadPanier() {
        try {
            const res = await fetch(`http://localhost:3000/favoris/${userId}`);
            const data = await res.json();
            console.log(data)
            setFavorites(data);
          } catch (err) {
            console.error('Erreur :', err);
          }finally {
            setLoading(false);
        }   
        }
        loadPanier();
      }, [userId]);


async function confirmAdd (){
try{


  const data = {userId:userId, produitId:2, qty: qty}
  console.log("Datas : ", data)
     const res = await fetch("http://localhost:3000/favoris/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          if (!res.ok) {
              throw new Error("Erreur lors de l'ajout de l'article");
          }
    console.log("Ajouté au panier :", qty);
    closeQty;
        }catch(err){
  console.error('Erreur :', err);
}
  };

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className="Title">Mes favoris</h1>

      <section className="fav-list">
        {favorites.map((it) => (
            <FavItem
              key={`${it.idUser_favoris}-${it.idProduit_favoris}`}
              img={it.produit?.photos?.[0]?.Images ?? "placeholder.jpg"}
              title={it.produit?.NomProduit ?? "Produit supprimé"}
              sellerName={it.produit?.vendeur?.Nom ?? "Vendeur inconnu"}
              sellerAvatar="https://res.cloudinary.com/dd9c0kmvh/image/upload/v1762464935/download_qdaxsv.png"
              quantity={Number(it.produit?.Quantité ?? 1)}
              price={Number(it.produit?.Prix ?? 0)}
              onAdd={() => openQty(it)}
              onToggleFavorite={() => handleToggleFavorite(it.idProduit_favoris)}
            />
          ))}
      </section>

      {/* ------ bouton QUANTITÉ ------ */}
      {showQty && (
        <div className="qty_modal_backdrop" onClick={closeQty}>
          <div className="qty_modal" onClick={(e) => e.stopPropagation()}>
            <h3>Quantité</h3>

            <div className="qty_row">
              <button
                className="qty_btn"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Diminuer"
              >
                −
              </button>
              <input
                className="qty_input"
                type="number"
                min="1"
                max="99"
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, Math.min(99, Number(e.target.value) || 1)))
                }
              />
              <button
                className="qty_btn"
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                aria-label="Augmenter"
              >
                +
              </button>
            </div>

            <div className="qty_actions">
              <button className="btn_cancel" onClick={closeQty}>Annuler</button>
              <button className="btn_confirm" onClick={confirmAdd}>Ajouter au panier</button>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}