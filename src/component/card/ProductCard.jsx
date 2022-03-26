import React from 'react'
import './productcard.css'
export const ProductCard = ({ title, brand, discount, price, actualPrice, imgSrc, rating }) => {
    return (
        <>
            <div className="card-component">
                <div class="product-card">
                    <img src={imgSrc} alt="" />
                    <div className="wishlist-box">
                    <i class="wish-list-icon fa fa-heart"></i>
                    </div>                   
                    <p class="image-title">{title} </p>
                    <p class="image-subtitle">{brand}</p>
                    <div className="rating-box">
                        <p className="rating">{rating} <i class=" fa fa-star"></i></p>
                    </div>
                    <div class="price-content">
                        <p class="price">₹{price} </p>
                        <p class="actual-price"> {actualPrice}</p>
                        <p class="discount">{discount}</p>
                    </div>
                    <button className='buy'>ADD TO CARD</button>

                </div>
            </div>
        </>
    )
}
