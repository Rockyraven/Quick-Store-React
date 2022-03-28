import React, { useContext } from 'react'
import {  Filter, ProductCard } from 'component'
import './product.css'
import '../../component/card/productcard.css'
import { useProduct } from 'context/ProductContext'

export const Product = () => {

  const {product} = useProduct()

  
  return (
    <>

    <div className="map">
     <div> <Filter /></div>
      <div>{product.map(item=><ProductCard title={item.title}  brand={item.brand} rating={item.rating} price={item.price} discount={item.discount} actualPrice={item.actualPrice} imgSrc={item.image} />) }</div>
      </div>
     
      
    </>
  )
}
