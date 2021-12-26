import React from "react";

export const Tour = ({ id, name, info, image, price, removeItem }) => {
  return (
    <div className="cardContainer">
      <img className="cardImg" src={image} alt={name} />
      <p className="cardTitle">{name}</p>
      <p className="cardInfo">{info}</p>
      <p className="cardPrice">
        {price}${" "}
        <button className="cardBtn" onClick={() => removeItem(id)}>
          Not Interested
        </button>
      </p>
    </div>
  );
};
