import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
    <div className="card">
      <div className="image">
        {item.isNew && <span>2023 Season</span>}
        <img src={item.img} alt="" className="mainImg" />
        <img src={item.img2} alt="" className="secondImg" />
      </div>

      {/* New prices of the item alongside the item's title thati s passed in accordingly */}
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
      </div>
    </div>
    </Link>
  );
};

export default Card;