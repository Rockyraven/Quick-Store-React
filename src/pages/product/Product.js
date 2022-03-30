import React, { useState } from 'react'
import { Filter, ProductCard } from 'component'
import './product.css'
import '../../component/card/productcard.css'
import { useProduct } from 'context/ProductContext'

export const Product = () => {

  const { product } = useProduct()

  const filterItem = (data, filterBy) => {
    if (filterBy === "Formal")
      return (data.filter(item =>
        item.categoryName === "Formal"))
    return data

  }

  const filteredData = filterItem(product, "Formal")
  console.log(filteredData)
  return (
    <>
  {/* <button onClick={filteredData.map(item => <ProductCard key={item._id} title={item.title} brand={item.brand} rating={item.rating} price={item.price} discount={item.discount} actualPrice={item.actualPrice} imgSrc={item.image} />)}>click</button> */}
      <div className="map">
        <div> <Filter /></div>
        <div className="card-component">
          {product.map(item => <ProductCard key={item._id} title={item.title} brand={item.brand} rating={item.rating} price={item.price} discount={item.discount} actualPrice={item.actualPrice} imgSrc={item.image} />)}</div>

      </div>



    </>
  )
}
