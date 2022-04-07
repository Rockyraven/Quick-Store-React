import { useWish } from 'context/WishContext';
import React from 'react'

export const CartCard = (
    {title,
    brand,
    discount,
    price,
    actualPrice,
    imgSrc,
    rating,
    _id}
) => {
    const {  addToWishList,wishlist ,removeToCart} = useWish();

   
  return (
    
                    <div className="cart-content">
                        <div className="cart-image">
                            <img src={imgSrc} alt=""/>
                        </div>
    
                        <div className="description-content">
                            <p className="image-title">{title} </p>
                            <p className="image-subtitle">{brand}</p>
                            <div className="price-content">
                                <h2 className="price">₹{price} </h2>
                                <h3 className="actual-price"> {actualPrice}</h3>
                                <p className="discount">{discount}</p>
                            </div>
                            <div className="wishlist-button">
                            {wishlist.some((item) => item._id === _id)} <button className="move-wishlist"  onClick={() => addToWishList({ title,
                                                    brand,
                                                    discount,
                                                    price,
                                                    actualPrice,
                                                    imgSrc,
                                                    rating,
                                                    _id })}>Move to Wishlist</button>
                                <button className="remove-cart"  onClick={() => removeToCart(_id)}>Remove to Cart</button>
                            </div>
                        </div>
                    </div>
              
  )
}
