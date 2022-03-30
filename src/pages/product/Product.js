import React from 'react'
import { Filter, ProductCard } from 'component'
import './product.css'
import '../../component/card/productcard.css'
import { useProduct } from 'context/ProductContext'

export const Product = () => {
  const { product } = useProduct()
  return (

    <div className="product-page-container">
      <Filter />
      <div className="card-component">
         {product.map(item => <ProductCard key={item._id} title={item.title} brand={item.brand} rating={item.rating} price={item.price} discount={item.discount} actualPrice={item.actualPrice} imgSrc={item.image} />)}
      </div>
    </div>
  )
}
