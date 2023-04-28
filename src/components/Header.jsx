import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Is Arama</h2>
      <div>
        <Link to={"/"}> Is Listesi </Link>
        <Link to={"/add-job"}> Is Ekle </Link>
      </div>
    </header>
  );
};

export default Header;
