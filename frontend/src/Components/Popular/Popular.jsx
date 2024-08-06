import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>BEST SELLER</h1>
      <hr />
      <div class="scroll-arrow left-arrow">&#9664;</div>
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <div class="scroll-arrow right-arrow">&#9654;</div>
    </div>
  );
};

export default Popular;
