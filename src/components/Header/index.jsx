import React from "react";
import { Logo, Orders } from "../../assets/icons";
import './header.scss'
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

const index = () => {
  return (
    <header className="header">
      <div className="header__logo__box">
        <Logo />
        <h1 className="brand__logo">Brand</h1>
      </div>
      <form className="header__search">
        <label>
          <TextInput placeholder="Search"  type="search" name="" id="" />
        </label>
        <Button type="submit" className="search__form__btn">Search</Button>
      </form>
      <div className="orders__box">
        <Orders className='order__icon' />
        <h4 className="order__title">Orders</h4>
      </div>
    </header>
  );
};

export default index;
