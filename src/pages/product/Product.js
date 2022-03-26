import React from 'react'
import {  Filter, ProductCard } from 'component'
import './product.css'
import { useState } from 'react'
import { useEffect } from 'react'

export const Product = () => {
  const [product, setProduct ] = useState([])
  useEffect(()=>{
    fetch('/api/products')
    .then(res=>res.json())
    .then(data=>setProduct(data.products))

  },[])
  return (
    <>
    <div className="map">
     <div> <Filter /></div>
      <div>{product.map(item=><ProductCard title={item.title}  brand={item.brand} price={item.price} discount={item.discount} actualPrice={item.actualPrice} imgSrc={item.image} rating={item.rating}/>) }</div>
      </div>
    </>
  )
}
