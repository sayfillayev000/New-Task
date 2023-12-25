import React from "react";
import { Logo, Orders } from "../../assets/icons";
import './header.scss'
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <header className="header container">
      <Link to='/' className="header__logo__box">
        <Logo />
        <h1 className="brand__logo">Brand</h1>
      </Link>
      <form className="header__search">
        <label>
          <TextInput placeholder="Search"  type="search" name="" id="" />
        </label>
        <Button type="submit" className="search__form__btn">Search</Button>
      </form>
      <Link to='/orders' className="orders__box">
        <Orders className='order__icon' />
        <h4 className="order__tit">Orders</h4>
      </Link>
    </header>
  );
};

export default index;
