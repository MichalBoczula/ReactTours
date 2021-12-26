import React, { useState } from "react";

export const Tour = ({ id, name, info, image, price, removeItem }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="cardContainer">
      <img className="cardImg" src={image} alt={name} />
      <div className="cardHeader">
        <p className="cardTitle">{name}</p>
        <p className="cardPrice">{price}$</p>
      </div>
      <p className="cardInfo">
        {showMore ? info : `${info.substring(0, 200)}...`}
        <button
          className="cardToggleInfoBtn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <button className="cardRemoveBtn" onClick={() => removeItem(id)}>
        Not Interested
      </button>
    </div>
  );
};
