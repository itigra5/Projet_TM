import React from "react";
import CatSection from "../Components/CategoriesSection";


function Search_1(){
    return (
        <>
        <h1 id="Title1">Achat par catégories</h1>
        <div id="Categories">
        <CatSection
            titre="Pâtisserie"
            lien="/test.html"
            image="/public/images/img_patisserie_cat.jpg"
            id="ClassPatsry"
    />
        <CatSection
            titre="Cuisine"
            lien="/test.html"
            image="/public/images/img_cuisine_cat.jpg"
            id="ClassCooking"
  />
        <CatSection
            titre="Couture"
            lien="/test.html"
            image="/public/images/img_couture_cat.jpg"
            id="ClassSewing"
  />
        <CatSection
            titre="Peinture"
            lien="/test.html"
            image="/public/images/img_peinture_cat.jpg"
            id="ClassPainting"
      />
            
        <CatSection
            titre="Bijoux"
            lien="/test.html"
            image="/public/images/img_bijoux_cat.jpg"
            id="ClassJewelry"
            
    />
        </div>
    </>
    );
}

export default Search_1;