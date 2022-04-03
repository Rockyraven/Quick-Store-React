import React from 'react'
import './filter.css'

export const Filter = ({ dispatch, state }) => {
    console.log(state.checked);
    return (

        <aside className="filter-wrapper" >
            <div className="filter-heading">
                <p className="filter">Filter</p>
                <button className="clear">Clear</button>
            </div>

            <div className="shoetype-category">
                <p className="filter-subtitle">Categories</p>
                <ul>
                   
                    <li>
                        <input
                            type="checkbox"
                            id='input2'
                            checked={state.Formal}
                            onChange={() => dispatch({ type: "FORMAL_SHOE" })}
                        />
                        <label htmlFor="input2"> Formal Shoes</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id='input1'
                            checked={state.Sports}
                            onChange={() => dispatch({ type: "SPORT_SHOE" })}
                        />
                        <label htmlFor="input1"> Sports Shoes</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id='input3'
                            checked={state.Sneaker}
                            onChange={() => dispatch({ type: "SNEAKER_SHOE" })}
                        />
                        <label htmlFor="input3"> Sneakers Shoes</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="input4"
                            checked={state.Casual}
                            onChange={() => dispatch({ type: "CASUAL_SHOE" })}
                        />
                        <label htmlFor="input4"> Casual Shoes</label>
                    </li>
                </ul>
            </div>

            <div className="sortedby-category">
                <p className="filter-subtitle">Sorted By </p>
                <ul>
                    <li>
                        <input
                            type="radio"
                            id='input6'
                            checked={state.sortBy === "LOW_TO_HIGH"}
                            onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                        />
                        <label htmlFor="input6"> Low to High Price</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id='input7'
                            checked={state.sortBy === "HIGH_TO_LOW"}
                            onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                        />
                        <label htmlFor="input7">High to Low Price</label>
                    </li>
                  
                </ul>
            </div>

            <div className="pricerange-category">
                <p className="filter-subtitle">Price Range </p>
                <ul>
                    <li><input type="range" /></li>
                    <p className="range-input">range 500 to 10,000</p>
                </ul>
            </div>

            <div className="rating-category">
                <p className="filter-subtitle">Rating</p>
                <ul>
                    <li>
                        <input
                         type="radio"
                         id='input8'
                         checked={state.rating === "fiveStar"}
                         onChange={() => dispatch({ type: "fiveStar" })}
                     />
                    <label htmlFor="input8"> 4 stars & above</label></li>
                    <li>
                        <input
                         type="radio"
                         id='input9'
                         checked={state.rating === "fourStar"}
                         onChange={() => dispatch({ type: "fourStar" })}
                     />
                    <label htmlFor="input9"> 3 stars & above</label></li>
                    <li>
                        <input
                         type="radio"
                         id='input10'
                         checked={state.rating === "threeStar"}
                         onChange={() => dispatch({ type: "threeStar" })}
                     />
                    <label htmlFor="input10"> 2 stars & above</label></li>
                    <li>
                        <input
                         type="radio"
                         id='input11'
                         checked={state.rating === "twoStar"}
                         onChange={() => dispatch({ type: "twoStar" })}
                     />
                    <label htmlFor="input11"> 1 stars & above</label></li>
                    <li>
                        <input
                         type="radio"
                         id='input12'
                         checked={state.rating === "oneStar"}
                         onChange={() => dispatch({ type: "oneStar" })}
                     />
                    <label htmlFor="input12"> 1 stars & below</label></li>

                </ul>
            </div>
        </aside>

    )
}
