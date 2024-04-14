import { Outlet } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import favicon from "../../../../favicon.png";
import authImage from "../../../assets/images/login-img.svg";
import "./AuthLayout.scss";
import React from "react";

const Layout: React.FC = () => {
  return (
    <div className="auth-container">
      <section className="auth-container__left">
        <img src={logo} alt="" className="" />
        <img
          src={authImage}
          alt=""
          className="auth-container__image loginImg"
        />
      </section>
      <section className="auth-container__right">
        <img
          src={favicon}
          alt=""
          className="auth-container__right__mobile-logo"
        />
        <Outlet />
      </section>
    </div>
  );
};

export const AuthLayout = React.memo(Layout);
