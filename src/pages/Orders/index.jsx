import React, { useState } from "react";
import "./orders.scss";
import { ShopNow } from "../../components";
import { futbolka2 } from "../../assets/images";
import { LeftIcon } from "../../assets/icons";

const index = () => {
  const data = sessionStorage.getItem("orders")
  ? (sessionStorage.getItem("orders"))
  : [];
  const [id, setId] = useState();
  if (id) {
    const data = JSON.parse(sessionStorage.getItem("orders"));
    sessionStorage.setItem(
      "orders",
      JSON.stringify(data?.filter((item) => item.id != id))
    );
  }
  return (
    <div className="container">
      <h2 className="order__title">Orders ({data.length})</h2>
      {data?.map((item) => (
        <div key={item.id} className="orders__container">
          <div className="order__card">
            <img className="order__left__img" src={item.img} alt="" />
            <div className="order__center">
              <h3>{item.info}</h3>
              <p>
                Size: medium, Color: blue, Material: Plastic Seller: Artel
                Market
              </p>
              <div className="remove__save">
                <button onClick={() => setId(item.id)}>Remove</button>
                <button>Save for later</button>
              </div>
            </div>
            <div className="order__right">
              <h4>{item.sena}</h4>
              <select name="" id="">
                <option value="">Qty: 9</option>
                <option value="">Qty: 3</option>
                <option value="">Qty: 1</option>
              </select>
            </div>
          </div>
        </div>
      ))}
      <ShopNow />
    </div>
  );
};

export default index;
