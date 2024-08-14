import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  console.log(props);
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" height={250} width={300} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
