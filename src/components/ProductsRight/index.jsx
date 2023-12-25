import React from "react";
import { Chiqish, PaginationLeft, PaginationRight } from "../../assets/icons";
import "./productsRight.scss";
import { PraductCard } from "..";
import { productData } from "../../Database";

const index = () => {
  return (
    <div className="product__card">
      <nav className="product__nav">
        <button>
          <h3>Samsung</h3>
          <Chiqish />
        </button>
        <button>
          <h3>Apple</h3>
          <Chiqish />
        </button>
        <button>
          <h3>Poco</h3>
          <Chiqish />
        </button>
        <button>
          <h3>Metallic</h3>
          <Chiqish />
        </button>
        <button>
          <h3>star</h3>
          <Chiqish />
        </button>
        <button>
          <h3>3 star</h3>
          <Chiqish />
        </button>
        <button className="all__filter">Clear all filter</button>
      </nav>
      <div className="cards__pruduct">
        {productData.map((itam) => (
          <PraductCard {...itam} key={itam.id} />
        ))}
      </div>
      <div className="product__pagination">
        <select name="" id="" className="product__select">
       
          <option value=""> Show 10</option>
        </select>
        <div className="card__pagination">
          <PaginationLeft className='leftIcon' />
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
          <PaginationRight className='rightIcon' />
        </div>
      </div>
    </div>
  );
};

export default index;
