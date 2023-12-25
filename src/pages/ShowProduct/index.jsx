import React from "react";
import "./showProduct.scss";
import { ShopNow } from "../../components";
import { futbolka7 } from "../../assets/images";
import { productShow } from "../../Database";
import { Message, Okey, Order, Shopping, Star } from "../../assets/icons";

const index = () => {
  return (
    <div className="show__product">
      <div className="container ">
        <div className="show__card">
          <div className="imgs__card">
            <img src={futbolka7} alt="" />
            <div>
              {productShow.img.map((item) => (
                <img src={item} alt="" key={item} />
              ))}
            </div>
          </div>
          <div className="show__info__card">
            <div className="stock">
              <div className="Save__later">
                <span>
                  <Okey /> In stock
                </span>
                <h3>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h3>
              </div>
              <h3 className="order__for">
                <Order /> Save for later
              </h3>
            </div>
            <div className="message__shopping">
              <div className="star__shopping">
                <Star />
                <span>9.3</span>
              </div>
              <div className="reviews">
                <Message />
                <span>32 reviews</span>
              </div>
              <div className="sold">
                <Shopping />
                <span>154 sold</span>
              </div>
            </div>
            <div className="narxlar">
              <div className="pcs50100">
                <h4>$98.00</h4>
                <span>50-100 pcs</span>
              </div>
              <div className="pcs100700">
                <h4>$90.00</h4>
                <span>100-700 pcs</span>
              </div>
              <div className="pcs700">
                <h4>$78.00</h4>
                <span>700+ pcs</span>
              </div>
            </div>
            <div className="price">
              <h3>Price: </h3>
              <h3>Negotiable </h3>
            </div>
            <div className="type">
              <h3>Type: </h3>
              <h3>Classic shoes </h3>
            </div>
            <div className="material">
              <h3>Material: </h3>
              <h3>Plastic material </h3>
            </div>
            <div className="design">
              <h3>Design: </h3>
              <h3>Modern nice </h3>
            </div>
            <div className="customization">
              <h3>Customization: </h3>
              <h3>Customized logo and design custom packages </h3>
            </div>
            <div className="protection">
              <h3>Protection:</h3>
              <h3>Refund Policy</h3>
            </div>
            <div className="warranty">
              <h3>Warranty: </h3>
              <h3>2 years full warranty</h3>
            </div>
          </div>
        </div>
        <ShopNow />
      </div>
    </div>
  );
};

export default index;
