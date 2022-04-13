import { ProductCard } from 'component';
import { useWish } from 'context/WishContext';
import React from 'react'
import './wishlist.css'

export const WishList = () => {
    const { wishlist } = useWish();

  return (
   
    <div className='wishlist-container'>
      <h1 className='wishlist-heading'>WishList Item : {wishlist.length}</h1>
      <div className="wishlist-card">
        {wishlist.map(({ _id,  price, title, brand,rating, discount, imgSrc }) => (
          <ProductCard
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
      </div>
      
  )
}
