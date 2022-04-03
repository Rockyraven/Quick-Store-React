import { NavProvider } from "context/NavContext";
import { ProductProvider } from "context/ProductContext";
import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import './index.css'
import { makeServer } from "./server";

// Call make Server
makeServer();


ReactDOM.render(
    
        <NavProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </NavProvider>
   

    , document.getElementById("root"));