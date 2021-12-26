import React from "react";
import { Tour } from "./Tour.js";

export const Tours = ({ data, removeItem }) => {
  return (
    <div className="cardsList">
      {data.map((ele) => {
        return <Tour key={ele.id} {...ele} removeItem={removeItem}></Tour>;
      })}
    </div>
  );
};
