import { useNav } from 'context/NavContext'
import React, { useState } from 'react'
import './productcard.css'
import axios from "axios";
import { useWish } from 'context/WishContext';
export const ProductCard = ({ title, brand, discount, price, actualPrice, imgSrc, rating, _id }) => {

    const { setcartCount, setwishCount } = useNav()
    const { wishlist, setWishList} = useWish();
    const [ color, setColor ] = useState("")
    // const [ delete , setDelete ] = useState("block");
    const [ remove, setRemove ] = useState("block");
    
    const cartHandler = () => {
      setcartCount(count1 => count1 + 1)
      
    }
    
    const addToWishList = () => {
      setColor("red");
      console.log(_id)
      setwishCount(count => count + 1)
       setWishList((list)=> [...list,{
         _id: _id,
         title: title,
         brand: brand,
         price: price,
         rating: rating,
         discount: discount,
         imgSrc: Image,
         actualPrice: actualPrice
       }])
      };

      const removeFromWishList = () => {
        console.log("delete");
        setRemove("none");
      }

    return (
            
            <div className="product-card">
                <img src={imgSrc} alt="" />
                <div className="wishlist-box"   >
                   
          {wishlist.some((item) => item._id === _id) ? (
          <i
            style={{ color: "red", Display: "rempve" }}
            onClick={() => removeFromWishList(_id)}
            className="card-btn-icon fa fa-heart"
          ></i>
        ) : (
          <i
            
            onClick={() => addToWishList(_id)}
            className="card-btn-icon fa fa-heart"
          ></i>
        )}
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
