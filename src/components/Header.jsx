import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaGrinHearts } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
        <span className="material-symbols-outlined search_icon">search</span>
      </div>
      <div className="action_bar">
        <div onClick={() => navigate("/profile")} className="action_container">
          <IoMdPerson />
          <span className="action_name">Profile</span>
        </div>

        <div onClick={() => navigate("/wishlist")} className="action_container">
          <FaGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <div onClick={() => navigate("/bag")} className="action_container">
          <IoBagAdd />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
