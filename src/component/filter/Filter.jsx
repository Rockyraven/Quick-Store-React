import React from 'react'
import './filter.css'

export const Filter = () => {   
  return (
 
        <aside className="filter-wrapper" >
            <div className="filter-heading">
                <p className="filter">Filter</p>
                <button className="clear">Clear</button>
            </div>

            <div className="shoetype-category">
                    <p className="filter-subtitle">Categories</p>
                    <ul>
                        <li><input id='input1' type="checkbox"/> <label htmlFor="input1">Sports Shoes</label></li>
                        <li><input id='input2' type="checkbox"/> <label htmlFor="input2">Formal Shoes</label></li>
                        <li><input id='input3' type="checkbox"/> <label htmlFor="input3">Sneakers Shoes</label></li>
                        <li><input id='input4' type="checkbox"/> <label htmlFor="input4">Casual Shoes</label></li>
                    </ul>
            </div>

            <div className="sortedby-category">
                <p className="filter-subtitle">Sorted By </p>
                <ul>
                    <li><input id='input6' type="radio"/> <label htmlFor="input6">Low to High Price</label></li>
                    <li><input id='input7' type="radio"/> <label htmlFor="input7">High to Low Price</label></li>
                    <li></li>
                </ul>
            </div>

            <div className="pricerange-category">
                <p className="filter-subtitle">Price Range </p>
                <ul>
                    <li><input type="range"/></li>
                    <p className="range-input">range 500 to 10,000</p>
                </ul>
            </div>

            <div className="rating-category">
                <p className="filter-subtitle">Rating</p>
                <ul>
                    <li><input id='input8' type="radio"/> <label htmlFor="input8">4 stars & above</label></li>
                    <li><input id='input9' type="radio"/> <label htmlFor="input9">3 stars & above</label></li>
                    <li><input id='input10' type="radio"/> <label htmlFor="input10">2 stars & above</label></li>
                    <li><input id='input11' type="radio"/> <label htmlFor="input11">1 stars & above</label></li>
                </ul>
            </div>
        </aside>
   
  )
}
