import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import "./home.scss";

const index = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default index;
