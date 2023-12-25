import React from "react";
import { ProducstLeft, ProductsRight } from "..";
import "./products.scss";

const index = () => {
  return (
    <div className="product__width">
      <div className="container products">
        <ProducstLeft />
        <ProductsRight />
      </div>
    </div>
  );
};

export default index;
