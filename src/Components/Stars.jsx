// Components/Stars.jsx
import React from "react";

function Stars({count}) {
  return (
    <div className="Stars">
      {[...Array(count)].map((_, i) => (
        <i key={i} className="fa-solid fa-star"></i>
      ))}
    </div>
  );
}

export default Stars;
