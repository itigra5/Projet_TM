import React from "react";
import { Link } from "react-router-dom";
import MiniProfil from "./MiniProfil";


function CompCart({link, img, name, pp, user, quantity, price}){
    return(
        <Link to={link}>
            <div class="CompCart">
                <img class="CompCartImg" src={img} alt="image de couverture"/>
                <div class="CompCartInfos">
                    <span class="ComptCartName">{name}</span>
                    <MiniProfil pp={pp} name={user} city=""/>
                    <span class="CompCartQuantity">Quantité : {quantity} pièces</span>
                    <span class="CompCartPrice">Prix pour un : {price} .-</span>
                    {/* Apret, je le ferais swipable */}
                    <button class="trash">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </Link>
    );   
}

export default CompCart;

