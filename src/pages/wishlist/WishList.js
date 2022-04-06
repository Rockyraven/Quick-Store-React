import { ProductCard } from 'component';
import { useProduct } from 'context/ProductContext';
import { useWish } from 'context/WishContext';
import React from 'react'
import './wishlist.css'

export const WishList = () => {
    const { wishlist } = useWish();
    const { product } = useProduct();

      // const check = (it) => {
      //   wishlist.find((item) => item._id === it._id);
      // }

      // const wishlistItem = wishlist.filter(check);

  return (
   
    <div className='wishlist-container'>
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
