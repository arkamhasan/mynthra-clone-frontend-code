import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import WishListItem from "../components/WishListItem";
import { useSelector } from "react-redux";
import WishListMassege from "../components/WishListMassege";

const WishList = () => {
  const item = {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: { stars: 4.5, count: 1400 },
  };

  const WishListItmes = useSelector((state) => state.wishList);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => {
    const imtemIndx = WishListItmes.indexOf(item.id);
    return imtemIndx >= 0;
  });

  return (
    <>
      {finalItems.length ? (
        <div className="items-container">
          {finalItems.map((item) => (
            <WishListItem item={item} />
          ))}
        </div>
      ) : (
        <WishListMassege />
      )}
    </>
    // <div className="massege">
    //   <h1>Your wishlist is empty!</h1>
    //   <Link className="btn-back" to="/">
    //     Add items
    //   </Link>
    // </div>
  );
};

export default WishList;
