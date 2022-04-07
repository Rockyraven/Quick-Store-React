import { CartCard } from "component";
import { useWish } from "context/WishContext";
import React from "react";
import "./addtocart.css";

export const CartPage = () => {
  const { cart } = useWish();


  return (
   
    <div className="cart-page">
      <div className="wishlist-card">
        {cart.map(({ _id, price, title, brand, rating, discount, imgSrc }) => (
          <CartCard
            _id={_id}
            price={price}
            title={title}
            key={_id}
            brand={brand}
            rating={rating}
            discount={discount}
            imgSrc={imgSrc}
          />
        ))}
      </div>


      <div className="price-container">
        <aside className="final-price-tag">
          <p className="price-heading">Price Details</p>
          <div className="original-price">
            <p>Price (5 items)</p>
            <p>2500/-</p>
          </div>
          <div className="discount-price">
            <p>Discount</p>
            <p>-500</p>
          </div>
          <div className="delivery-price">
            <p>Delivery Charges</p>
            <p>100</p>
          </div>

          <div className="total-price">
            <p>Total Amount</p>
            <p>2100/-</p>
          </div>
          <p>You will save ₹500 on this Order</p>
          <button className="place-order">Place Your Order</button>
        </aside>
      </div>
      </div>
    
  );
};
