import React, { useState } from "react";
import "./productcard.css";
import { useWish } from "context/WishContext";
export const ProductCard = ({
  title,
  brand,
  discount,
  price,
  actualPrice,
  imgSrc,
  rating,
  _id,
}) => {
  const { wishlist, addToWishList, removeFromWishList } = useWish();

  return (
    <div className="product-card">
      <img src={imgSrc} alt="" />
      <div className="wishlist-box">
        {wishlist.some((item) => item._id === _id) ? (
          <i
            style={{ color: "red" }}
            onClick={() => removeFromWishList(_id)}
            className="wish-list-icon fa fa-heart"
          ></i>
        ) : (
          <i
            onClick={() => addToWishList({ title,
              brand,
              discount,
              price,
              actualPrice,
              imgSrc,
              rating,
              _id })}
            className="card-btn-icon fa fa-heart"
          ></i>
        )}
      </div>
      <p className="image-title">{title} </p>
      <p className="image-subtitle">{brand}</p>
      <div className="rating-box">
        <p className="rating">
          {rating} <i className=" fa fa-star"></i>
        </p>
      </div>
      <div className="price-content">
        <p className="price">₹{price} </p>
        <p className="actual-price"> {actualPrice}</p>
        <p className="discount-price">{discount}</p>
      </div>
      <button className="buy">Add To Card</button>
    </div>
  );
};
