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
                        <li><input type="checkbox"/> <label for="input">Sports Shoes</label></li>
                        <li><input type="checkbox"/> <label for="input">Formal Shoes</label></li>
                        <li><input type="checkbox"/> <label for="input">Sneakers Shoes</label></li>
                        <li><input type="checkbox"/> <label for="input">Casual Shoes</label></li>
                        <li><input type="checkbox"/> <label for="input">Sandles & Floater</label></li>
                    </ul>
            </div>

            <div class="sortedby-category">
                <p class="filter-subtitle">Sorted By </p>
                <ul>
                    <li><input type="radio"/> <label for="input">Low to High Price</label></li>
                    <li><input type="radio"/> <label for="input">High to Low Price</label></li>
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
                    <li><input type="radio"/> <label for="input">4 stars & above</label></li>
                    <li><input type="radio"/> <label for="input">3 stars & above</label></li>
                    <li><input type="radio"/> <label for="input">2 stars & above</label></li>
                    <li><input type="radio"/> <label for="input">1 stars & above</label></li>
                </ul>
            </div>
        </aside>
    </div>
    </div>

  )
}
