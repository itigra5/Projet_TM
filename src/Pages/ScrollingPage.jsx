import React from "react";
import AnnonceSwip from "../Components/AnnonceSwip";

function Scrolling() {
  return (
    <div className="scrollPage">
      <section className="Slide"><AnnonceSwip /></section>
      <section className="Slide"><AnnonceSwip /></section>
      <section className="Slide"><AnnonceSwip /></section>
    </div>
  );
}

export default Scrolling;
