import { CartCard } from "component";
import { useWish } from "context/WishContext";
import React, { useEffect, useState } from "react";
import "./addtocart.css";

export const CartPage = () => {
  const { cart, total } = useWish();
  const [ totalQuantity, setTotalQuantity ] = useState(0);
  const quantityHandler = () => {
    let qty = 0;
    cart.map(cartItem => qty += cartItem.quantity)
    setTotalQuantity(qty);
}
useEffect(()=> {
    quantityHandler();
},[cart])


  return (
   
    <div className="cart-page">
      <div className="wishlist-card">
        {cart.map(({ _id, price, title, brand, rating, discount, imgSrc,quantity }) => (
          <CartCard
            _id={_id}
            price={price}
            title={title}
            key={_id}
            brand={brand}
            rating={rating}
            discount={discount}
            imgSrc={imgSrc}
            quantity={quantity}
          />
        ))}
      </div>


      <div className="price-container">
        <div className="final-price-tag">
          <p className="price-heading">Price Details</p>
          <div className="original-price">
            <p>Price ({totalQuantity} items)</p>
            <p>{total}/-</p>
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
            <p>{total -500 + 100}/-</p>
          </div>
          <p>You will save ₹500 on this Order</p>
          <button className="place-order">Place Your Order</button>
        </div>
      </div>
      </div>
    
  );
};
