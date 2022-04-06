import { ProductCard } from 'component';
import { useProduct } from 'context/ProductContext';
import { useWish } from 'context/WishContext';
import React from 'react'
import './wishlist.css'

export const WishList = () => {
    const { wishlist } = useWish();
    const { product } = useProduct();

      const check = (it) => {
        wishlist.find((item) => item._id === it._id);
      }

      // const wishlistItem = product.filter(check);
      console.log(product);

  return (
    <>
  
      <div className="wishlist-container">
        {/* {product.map(({ _id,  price, title, brand,rating, discount,  }) => (
          <ProductCard
            _id={_id}
            // image={image}
            price={price}
            title={title}
            key={_id}
            brand={brand}
            rating={rating}
            discount={discount}
          />
        ))} */}
      </div></>
  )
}
