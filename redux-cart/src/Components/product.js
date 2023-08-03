import React from "react";
import { Products } from "../data/Productlist";
import ProductsCard from "./ProductCards";



const Product = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {Products.map((pro) => (
        <ProductsCard {...pro} />
      ))}
    </div>
  );
};

export default Product;