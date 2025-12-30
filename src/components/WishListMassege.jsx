import React from "react";
import { Link } from "react-router-dom";

const WishListMassege = () => {
  return (
    <div className="massege">
      <h1>Your wishlist is empty</h1>
      <Link className="btn-back" to="/">
        Add items
      </Link>
    </div>
  );
};

export default WishListMassege;
