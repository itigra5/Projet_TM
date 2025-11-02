import React, { useState, useRef, useEffect} from "react";
import "../Components/AddPage.css"

function Add() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const fileRef = useRef();


      async function handleCancel() {
        try{
          setTitle("");
          setDesc("");
          setPrice("");
          setCategory("");
          setImages([]);
        }catch(err){
          console.error('Erreur :', err)
        }
      };

      async function handleSubmit() {
        try{

        const categoryObj = categories.find(cat => cat.NomCategorie === category);
        const categoryId = categoryObj ? categoryObj.idCategorie : null;

        if (!categoryId) {
            alert("Veuillez choisir une catégorie valide !");
            return;
          }

        // Vérifie que le titre et la description ne sont pas vides
        if (!title.trim() || !desc.trim()) {
            alert("Le titre et la description sont obligatoires !");
            return;
          }

            // Vérifie que le prix est un nombre valide
    const priceNum = Number(price);
    if (isNaN(priceNum) || priceNum < 0) {
      alert("Veuillez entrer un prix valide !");
      return;
    }

          // Prépare les données à envoyer
          const data = {
            title: title.trim(),
            desc: desc.trim(),
            price: priceNum,
            categoryId
          };

      // Créer le produit
          console.log("Le bouton !", data)
          const res = await fetch("http://localhost:3000/articles/post", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          if (!res.ok) {
              throw new Error("Erreur lors de l'ajout de l'article");
          }

          const result = await res.json();
          const produitId = result.id;
          alert("ça a marché !")
      // Loader les images

        await handleUpload(produitId);

        }catch(err){
          console.error('Erreur :', err)
        }
      };

      async function handleUpload(produitId) {
        try{
          for (const file of images){
          const formData = new FormData();
          formData.append('image', file.file);
          formData.append('idProduit_Photo', produitId);

          const res = await fetch('http://localhost:3000/articles/upload', {
            method: 'POST',
            body: formData,
          });

          const data = await res.json();
          console.log('Lien Cloudinary:', data.url);
          }
        }catch(err){
          console.error('Erreur :', err);
        } 
      };
  useEffect(() => {
      async function loadCategories() {
        try {
          const res = await fetch("http://localhost:3000/categories");
          const data = await res.json();
          setCategories(data); // on stocke dans le state
        } catch (err) {
          console.error('Erreur :', err);
        }
      };

      loadCategories();
  }, []);


  return(
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
              onChange={(e) => {
                      // Récupère tous les fichiers sélectionnés
                      const files = Array.from(e.target.files);

                      // On crée un tableau d'objets avec url temporaire pour affichage
                      const newImages = files.map((file) => ({
                        file,
                        url: URL.createObjectURL(file),
                      }));

                      // Met à jour le state images
                      setImages((prev) => [...prev, ...newImages]);
                  }}
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
            placeholder="Décris ton annonce..."
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
            {categories.map(cat => (
              <option  key={cat.idCategorie} value={cat.NomCategorie}>
                {cat.NomCategorie}
              </option>
            ))}

          </select>
        </label>

        {/* Boutons bas */}
        <div className="actions">
          <button className="btn outline" type="button" onClick={handleCancel}>Annuler</button>
          <button className="btn primary" type="button" onClick={handleSubmit}>Ajouter</button>
        </div>
      </div>
    </div>
  );
}
export default Add;