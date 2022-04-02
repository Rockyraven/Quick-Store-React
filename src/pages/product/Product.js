import React,{useReducer} from 'react'
import { Filter, ProductCard } from 'component'
import './product.css'
import '../../component/card/productcard.css'
import { useProduct } from 'context/ProductContext'
import { reducer } from 'reducer/filter-reducer'
import { getPriceWishFilter } from 'filterFuntion/sort'
import { categoryFiltered } from 'filterFuntion/filter-category'
import { ratingFilter } from 'filterFuntion/ratingFilter'

export const Product = () => {
  const { product } = useProduct()
  const [state, dispatch] = useReducer(reducer, {
    sortBy: ""  ,
    Sports: false,
    Casual: false,
    Formal: false,
    Sneaker: false,
    rating: false
  });
  const categoryFilteredProduct = categoryFiltered(
    product,
    state
  );
  const PriceWishFilter = getPriceWishFilter(
    categoryFilteredProduct,
    state.sortBy
  );
  const ratfilter = ratingFilter(
    PriceWishFilter,
    state.rating,
    console.log("rocky")
  )

  return (

    <div className="product-page-container">
      <Filter dispatch={dispatch} state={state} />
     
      <div className="card-component">
         {PriceWishFilter.map(item => <ProductCard key={item._id} title={item.title} brand={item.brand} rating={item.rating} price={item.price} discount={item.discount} actualPrice={item.actualPrice} imgSrc={item.image} />)}
      </div>
    </div>
  )
}
