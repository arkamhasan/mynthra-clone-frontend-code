import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const today = new Date();

  const date = today.getDate() + 3;
  const month = today.toLocaleString("en-US", { month: "long" });
  const year = today.getFullYear();

  return (
    <div className="bag-items-container">
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price-container">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount-percentage">
              ({item.discount_percentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">
              {item.return_period} days
            </span>{" "}
            return available
          </div>
          <div className="delivery-details">
            Delivery in {date} {month} {year}
            <span className="delivery-details-days"></span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={handleRemoveItem}>
          <MdDelete className="delete-item-icon" />
        </div>
      </div>
    </div>
  );
};

export default BagItem;
