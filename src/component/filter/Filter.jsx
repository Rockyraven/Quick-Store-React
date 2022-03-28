import React from 'react'
import './filter.css'


export const Filter = () => {
   
  return (
    <div class="filter-main-container">
    <div class="filter-container">
        <aside class="filter-wrapper">
            <div class="filter-heading">
                <p class="filter-subtitle">Filter</p>
                <button class="clear">Clear</button>
            </div>

            <div class="shoetype-category">
                    <p class="filter-subtitle">Categories</p>
                    <ul>
                        <li><input id='input1' type="checkbox"/> <label for="input1">Sports Shoes</label></li>
                        <li><input id='input2' type="checkbox"/> <label for="input2">Formal Shoes</label></li>
                        <li><input id='input3' type="checkbox"/> <label for="input3">Sneakers Shoes</label></li>
                        <li><input id='input4' type="checkbox"/> <label for="input4">Casual Shoes</label></li>
                    </ul>
            </div>

            <div class="sortedby-category">
                <p class="filter-subtitle">Sorted By </p>
                <ul>
                    <li><input id='input6' type="radio"/> <label for="input6">Low to High Price</label></li>
                    <li><input id='input7' type="radio"/> <label for="input7">High to Low Price</label></li>
                    <li></li>
                </ul>
            </div>

            <div class="pricerange-category">
                <p class="filter-subtitle">Price Range </p>
                <ul>
                    <li><input type="range"/></li>
                    <p class="range-input">range 500 to 10,000</p>
                </ul>
            </div>
            <div class="rating-category">
                <p class="filter-subtitle">Rating</p>
                <ul>
                    <li><input id='input8' type="radio"/> <label for="input8">4 stars & above</label></li>
                    <li><input id='input9' type="radio"/> <label for="input9">3 stars & above</label></li>
                    <li><input id='input10' type="radio"/> <label for="input10">2 stars & above</label></li>
                    <li><input id='input11' type="radio"/> <label for="input11">1 stars & above</label></li>
                </ul>
            </div>
        </aside>
    </div>

    </div>

  )
}
