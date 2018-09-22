import React from "react";
import "./Card.css";
// added prop id's to image json run image click function for props
//id
const Cards = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.img} id={props.id} onClick={() => props.imageClicked(props.id)}/>
    </div>
  </div>
);

export default Cards;