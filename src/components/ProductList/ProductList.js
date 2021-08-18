import React from "react";
import "./ProductList.css";

function ProductList({ list }) {
  console.log("LIST RENDERRRRR", list);
  return (
    <div>
      {list &&
        list.map((product, index) => (
          <div key={index}>
            <h3>
              {product.quantity} {product.name}
            </h3>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
