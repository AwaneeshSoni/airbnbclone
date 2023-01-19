import React from "react";
import img from "../img/logo.png";
import "../index.css";
import star from "../img/star-icon.png";
function Card(props) {

  let BadgeText;
  if(props.openSpots == 0 ){
    BadgeText = "Sold Out"
  }
  else {
    BadgeText = "Online"
  }
  return (
    <div className="card">
      {BadgeText && <div className="card-badge">
        {BadgeText}
      </div>
}
      <img src={img} className="card-img" />
      <div className="card--stats">
        <img src={star} className="star-img" />
        <span>{props.rating}</span>
        <span className="grey">{props.reviewCount}*</span>
        <span className="grey">({props.price})</span>
      </div>
    <p>{props.title}</p>
    <p><span className="bold">${props.price}</span>/person</p>
    </div>
  );
}

export default Card;
