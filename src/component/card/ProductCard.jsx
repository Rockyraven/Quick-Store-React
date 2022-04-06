import { useNav } from 'context/NavContext'
import React, { useState } from 'react'
import './productcard.css'
import axios from "axios";
import { useWish } from 'context/WishContext';
export const ProductCard = ({ title, brand, discount, price, actualPrice, imgSrc, rating, _id }) => {

    const { setcartCount, setwishCount } = useNav()
    // const [ color, setColor ] = useState("")
    const {wishlist, setWishList} = useWish();
    // const wishHandler = () => {
    //     // setColor("red");
    //     setwishCount(count => count + 1)
    // }
    // const cartHandler = () => {
    //     setcartCount(count1 => count1 + 1)

    // }

    const addToWishList = async () => {
        try {
          const wishlistData = await axios.post(
            "/api/user/wishlist",
            {
              product: { _id },
            }
          );
          setWishList(wishlistData.data.wishlist);
        } catch (error) {
        //   showToast({ message: "Sign in to add items wishlist", type: "failure" });
        console.log("cartupdate");
        }
      };

    return (
            
            <div className="product-card">
                <img src={imgSrc} alt="" />
                <div className="wishlist-box" onClick={() => addToWishList(_id)}  >
                    {/* <i className="wish-list-icon fa fa-heart" style={{ color: color }}></i> */}
                    <i
            style={{ fontSize: "x-large" }}
            onClick={() => addToWishList(_id)}
            className="wish-list-icon fa fa-heart"
          ></i>
                </div>
                <p className="image-title">{title} </p>
                <p className="image-subtitle">{brand}</p>
                <div className="rating-box">
                    <p className="rating">{rating} <i className=" fa fa-star"></i></p>
                </div>
                <div className="price-content">
                    <p className="price">₹{price} </p>
                    <p className="actual-price"> {actualPrice}</p>
                    <p className="discount-price">{discount}</p>
                </div>
                <button className='buy' >Add To Card</button>

            </div>
        
    )
}
