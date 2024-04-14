import React from "react";
import Logo from "../../../favicon.png"
import "./LazyLoader.scss"

const Loader: React.FC = () => {
  return (
    <div className="grid">
      <img src={Logo} alt="" className="loader" />
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export const LazyLoader = React.memo(Loader)