import { useNav } from 'context/NavContext'
import React, { useState } from 'react'
import './productcard.css'
export const ProductCard = ({ title, brand, discount, price, actualPrice, imgSrc, rating }) => {

    const { setcartCount, setwishCount } = useNav()
    const [ color, setColor ] = useState("")
    const wishHandler = () => {
        setColor("red");
        setwishCount(count => count + 1)
    }
    const cartHandler = () => {
        setcartCount(count1 => count1 + 1)

    }
    return (
            
            <div className="product-card">
                <img src={imgSrc} alt="" />
                <div className="wishlist-box" onClick={wishHandler}   >
                    <i className="wish-list-icon fa fa-heart" style={{ color: color }}></i>
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
                <button className='buy' onClick={cartHandler}>Add To Card</button>

            </div>
        
    )
}
