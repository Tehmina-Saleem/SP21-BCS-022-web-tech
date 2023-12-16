import React, { useState } from "react";
import SingleProduct from "./singleproduct";
const Products = () => {
  const [products, setProducts] = useState([
    {name: "abc", price: "300" },
    {name:"abc1", price:"489"}]);

  return (
    <div>
      <h1>Products</h1>
      {products.map(product=><Products/>)}
    </div>
  );
};

export default Products;
