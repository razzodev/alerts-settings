import React from "react";
import "./Card.css";
function Card({ title, children }) {
  return (
    <div id="card-wrapper">
      <span>{title}</span>
      <hr id="card-hr"></hr>
      <div>{children}</div>
    </div>
  );
}

export default Card;
