import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown.jpg";
import Item from "../Components/Item/Item";
import product1 from "../Components/Assets/product1";
const ShopCategory = (props) => {
  // const all_product = useContext(ShopContext)
  console.log(product1);
  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {product1 ? (
          product1.map((item, i) => {
            if (props.category === item.category) {
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
            } else {
              return;
              <p key={i}>No products found in this category.</p>;
            }
          })
        ) : (
          <div> no category found</div>
        )}
      </div>
      <div className="shopCategory-loadMore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
