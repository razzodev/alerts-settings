import React from "react";
import "./Card.css";
import AlertStore from "../Store";
function Card({ title, children, path }) {
  const toggleExpanded = () => {
    AlertStore.update((s) => {
      s[path.name].isExpanded = !path.isExpanded;
    });
  };
  return (
    <div id="card-wrapper">
      <div id="card-header">
        <span className="title symbol" onClick={toggleExpanded}>
          {path.isExpanded ? "-" : "+"}
        </span>
        <span className="title">{title}</span>
      </div>
      <hr id="card-hr"></hr>
      {path.isExpanded && <div id="card-expanded">{children}</div>}
    </div>
  );
}

export default Card;
