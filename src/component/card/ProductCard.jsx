import React from 'react'
import './productcard.css'
export const ProductCard = ({ title, brand, discount, price, actualPrice, imgSrc }) => {
    return (
        <>
            <div className="card-component">
                <div class="product-card">
                    <img src={imgSrc} alt="" />
                    <p class="image-title">{title} </p>
                    <p class="image-subtitle">{brand}</p>
                    <div class="price-content">
                        <p class="price">{price} </p>
                        <p class="actual-price"> {actualPrice}</p>
                        <p class="discount">{discount}</p>
                    </div>
                    <button className='buy'>ADD TO CARD</button>

                </div>
            </div>
        </>
    )
}
