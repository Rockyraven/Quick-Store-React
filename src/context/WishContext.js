import { createContext, useContext,  useEffect,  useState } from "react";

const wishlistContext = createContext(null);

const WishProvider = ({children}) => {
    const [ wishlist, setWishList ] = useState([]);
    useEffect(()=>{
        console.log(wishlist);
    },[wishlist])
    
    return(
        <wishlistContext.Provider value={{wishlist, setWishList}}>
        {children}
    </wishlistContext.Provider>
    )
}

const useWish = () => useContext(wishlistContext);

export { WishProvider, useWish };
