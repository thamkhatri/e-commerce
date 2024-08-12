import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  console.log(contextValue);
  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};

export default ShopContextProvider;
