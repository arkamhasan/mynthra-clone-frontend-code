import React from "react";
import { Link } from "react-router-dom";

const Massege = () => {
  return (
    <div className="massege">
      <h1>Your Cart is empty!</h1>
      <Link className="btn-back" to="/">
        Shop now
      </Link>
    </div>
  );
};

export default Massege;
