import { createContext, useContext,  useEffect,  useState } from "react";

const wishlistContext = createContext(null);

const WishProvider = ({children}) => {
    const [ wishlist, setWishList ] = useState(JSON.parse(localStorage.getItem ("wishlist")));

    useEffect(()=> {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    },[wishlist])
    
    // funtions for add to cart and remove card  
    const addToWishList = (product) => {
        setWishList(prev => [...prev, product ] )
    }

    
    const [ cart, setCart ] = useState([]);

  const addToCart = (product) => {
      setCart(prev => [...prev, product ])
  }


    const removeFromWishList = (id) => {

        // for underStanding purpose
        // let temproduct = wishlist
        // temproduct = temproduct.filter(item => item._id !== id)   
        // setWishList(temproduct);

        setWishList(wishlistProducts => wishlistProducts.filter(item => item._id !== id)  )
    }
    
    const removeToCart = (id) => {
        setCart(wishlistProducts => wishlistProducts.filter(item => item._id !== id)  )

    }
    
    return(
        <wishlistContext.Provider value={{ wishlist, setWishList, addToWishList, removeFromWishList, addToCart, cart, setCart, removeToCart }}>
        {children}
    </wishlistContext.Provider>
    )
}

const useWish = () => useContext(wishlistContext);

export { WishProvider, useWish };
