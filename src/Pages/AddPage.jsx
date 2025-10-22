import React, { useState, useRef } from "react";
import "../Components/AddPage.css"

function Add() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const fileRef = useRef();


  return (
    <div className="add-page">
      <div className="add-card">

        {/* 1. Titre */}
        <label className="field">
          <span className="label-text">Titre</span>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nom de l'annonce"
          />
        </label>

        {/* 2. Photos */}
        <div className="field">
          <span className="label-text">Photos</span>
          <div className="photo-grid">
            {images.map((img, idx) => (
              <div key={idx} className="photo-preview">
                <img src={img.url} alt={`upload-${idx}`} />
              </div>
            ))}
            <div
              className="photo-add"
              onClick={() => fileRef.current.click()}
            >
              <span>+</span>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileRef}
              style={{ display: "none" }}
              onChange={(e) => handleImages(e.target.files)}
            />
          </div>
        </div>

        {/* Description */}
        <label className="field">
          <span className="label-text">Description</span>
          <textarea
            className="textarea"
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Décris ton objet / ton annonce..."
          />
        </label>

        {/* Prix */}
        <label className="field small">
          <span className="label-text">Prix (CHF)</span>
          <input
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Ex: 10"
            inputMode="decimal"
          />
        </label>

        {/* Catégories */}
        <label className="field">
          <span className="label-text">Catégorie</span>
          <select
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choisir une catégorie</option>
            <option value="vetement">Patiseurie</option>
            <option value="electronique">cuisine</option>
            <option value="maison">Bijoux</option>
            <option value="artEtcollection">art et collection</option>
            <option value="couture">Couture</option>

          </select>
        </label>

        {/* Boutons bas */}
        <div className="actions">
          <button className="btn outline" type="button">Annuler</button>
          <button className="btn primary" type="button">Ajouter</button>
        </div>
      </div>
    </div>
  );
}

export default Add;