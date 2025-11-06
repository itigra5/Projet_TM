import React, { useState, useMemo } from "react";
import CompCart from "../Components/CompCart.jsx";
import myData from "../Data.json";
import "../Components/CompCart.css";

export default function Cart() {
  const vendor = myData.user[1];

  // --- état du panier ---
  const [items, setItems] = useState([
    {
      id: 1,
      link: "/produit/1",
      img: "https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp",
      name: "Muffins très bons",
      user: vendor.name,
      pp: vendor.profil_picture,
      quantity: 3,
      price: 2.5,
    },
    {
      id: 2,
      link: "/produit/2",
      img: "https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp",
      name: "Muffins délicieux",
      user: vendor.name,
      pp: vendor.profil_picture,
      quantity: 2,
      price: 3.0,
    },
    {
      id: 3,
      link: "/produit/2",
      img: "https://www.francine.com/wp-content/uploads/2018/09/mini-muffins-aux-petits-suisses-691125016252-1.webp",
      name: "Muffins délicieux",
      user: vendor.name,
      pp: vendor.profil_picture,
      quantity: 4,
      price: 3.0,
    },
  ]);

  // ---  quantité / suppression ---
  const handleIncreaseQty = (id, newQty) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: newQty } : it))
    );

  const handleDecreaseQty = (id, newQty) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: Math.max(1, newQty) } : it))
    );

  const handleDeleteItem = (id) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  // --- total général ---
  const totalPanier = useMemo(() => {
    return items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  }, [items]);

  return (
    <>
      <h1 className="Title">Mon panier</h1>

      {items.map((it) => (
        <CompCart
          key={it.id}
          id={it.id}
          link={it.link}
          img={it.img}
          name={it.name}
          user={it.user}
          pp={it.pp}
          quantity={it.quantity}
          price={it.price}
          onIncrease={handleIncreaseQty}
          onDecrease={handleDecreaseQty}
          onDelete={handleDeleteItem}
        />
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