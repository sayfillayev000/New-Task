import React, { useEffect } from "react";
import { Order, Star } from "../../assets/icons";
import "./praductCard.scss";
import { useDispatch } from "react-redux";
import { orderData } from "../../store/orders";

const index = ({ img, sena, sikitka, star, info, id }) => {
  const dispatch = useDispatch();
  // console.log(orderData);
  const hendleClick = () => {
    const data = sessionStorage.getItem("orders")
      ? JSON.parse(sessionStorage.getItem("orders"))
      : [];
    sessionStorage.setItem(
      "orders",
      JSON.stringify([
        ...data,
        {
          id: id,
          img: img,
          sena: sena,
          sikitka: sikitka,
          star: star,
          info: info,
        },
      ])
    );
  };

  return (
    <div className="card__product">
      <div className="card__img" style={{ backgroundImage: `url(${img})` }} />
      <div className="card__info">
        <div className="card__left">
          <h4>
            <span>{sena}</span>
            <span>{sikitka}</span>
          </h4>
          <h3>
            <Star /> <span>{star}</span>
          </h3>
          <p>{info}</p>
        </div>
        <Order className="card__rigth" onClick={hendleClick} />
      </div>
    </div>
  );
};

export default index;
