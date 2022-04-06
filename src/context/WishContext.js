import { createContext, useContext,  useState } from "react";

const wishlistContext = createContext(null);

const WishProvider = ({children}) => {
    const [ wishlist, setWishList ] = useState();
    return(
        <wishlistContext.Provider value={{wishlist, setWishList}}>
        {children}
    </wishlistContext.Provider>
    )
}

const useWish = () => useContext(wishlistContext);

export { wishlistContext, WishProvider, useWish };
