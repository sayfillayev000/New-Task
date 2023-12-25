import React from "react";
import "./orders.scss";
import { ShopNow } from "../../components";
import { futbolka2 } from "../../assets/images";
import { LeftIcon } from "../../assets/icons";

const index = () => {
  return (
    <div className="container">
      <h2 className="order__title">Orders (3)</h2>
      <div className="orders__container">
        <div className="order__card">
          <img className="order__left__img" src={futbolka2} alt="" />
          <div className="order__center">
            <h3>T-shirts with multiple colors, for men and lady</h3>
            <p>
              Size: medium, Color: blue, Material: Plastic Seller: Artel Market
            </p>
            <div className="remove__save">
              <button>Remove</button>
              <button>Save for later</button>
            </div>
          </div>
          <div className="order__right">
            <h4>$78.99</h4>
            <select name="" id="">
              <option value="">Qty: 9</option>
              <option value="">Qty: 3</option>
              <option value="">Qty: 1</option>
            </select>
          </div>
        </div>
      </div>
      <div className="orders__container">
        <div className="order__card">
          <img className="order__left__img" src={futbolka2} alt="" />
          <div className="order__center">
            <h3>T-shirts with multiple colors, for men and lady</h3>
            <p>
              Size: medium, Color: blue, Material: Plastic Seller: Artel Market
            </p>
            <div className="remove__save">
              <button>Remove</button>
              <button>Save for later</button>
            </div>
          </div>
          <div className="order__right">
            <h4>$78.99</h4>
            <select name="" id="">
              <option value="">Qty: 9</option>
              <option value="">Qty: 3</option>
              <option value="">Qty: 1</option>
            </select>
          </div>
        </div>
        <button className="back__shop">
          <LeftIcon /> Back to shop
        </button>
      </div>
      <ShopNow />
    </div>
  );
};

export default index;
