import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { wishListAction } from "../store/WishListSlice";

const WishListItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const WishListItems = useSelector((store) => store.wishList);

  const ElementFoud = bagItems.indexOf(item.id) >= 0;
  const WishListElementFound = WishListItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const handleWishListAdd = () => {
    dispatch(wishListAction.addToWishList(item.id));
  };

  const handleWishListRemove = () => {
    dispatch(wishListAction.removeFromWishList(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img
          className="item-image"
          src={item.image}
          alt="item image"
          onClick={scrollTo(0, 0)}
        />

        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>

        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        <div className="btn-add-div">
          {ElementFoud ? (
            <button className="btn-remove-bag" onClick={handleRemove}>
              <MdDelete className="bag-icon" /> Remove
            </button>
          ) : (
            <button className="btn-add-bag" onClick={handleAddToBag}>
              <IoAddCircleOutline className="bag-icon" /> Add to Bag
            </button>
          )}
          {WishListElementFound ? (
            <button
              onClick={handleWishListRemove}
              className="wishList-remove-btn"
            >
              <FaHeart className="like-icon" />
            </button>
          ) : (
            <button onClick={handleWishListAdd} className="wishList-add-btn">
              <FaRegHeart className="like-icon" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default WishListItem;
