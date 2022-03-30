import React, { useState } from 'react'
import './productcard.css'
export const ProductCard = ({ title, brand, discount, price, actualPrice, imgSrc, rating }) => {
    const [ BgColor , SetBgColor ] = useState("");
const [ color , setColor ] = useState("")
    const ClickHandler = () =>{
        SetBgColor("white");
        setColor("red")
    }
    return (
        <>
            
                <div className="product-card">
                    <img src={imgSrc} alt="" />
                    <div className="wishlist-box" onClick={ClickHandler} style={{backgroundColor: BgColor }}>
                    <i className="wish-list-icon fa fa-heart" style={{color: color }}></i>
                    </div>                   
                    <p className="image-title">{title} </p>
                    <p className="image-subtitle">{brand}</p>
                    <div className="rating-box">
                        <p className="rating">{rating} <i className=" fa fa-star"></i></p>
                    </div>
                    <div className="price-content">
                        <p className="price">₹{price} </p>
                        <p className="actual-price"> {actualPrice}</p>
                        <p className="discount">{discount}</p>
                    </div>
                    <button className='buy'>ADD TO CARD</button>

                </div>
            
        </>
    )
}
