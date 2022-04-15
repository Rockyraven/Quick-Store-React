import { createContext, useContext, useEffect, useState } from "react";

const wishlistContext = createContext(null);

const WishProvider = ({ children }) => {
    
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [wishlist, setWishList] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // funtions for add to cart and remove card
  const addToWishList = (product) => {
    // setWishList(prev => [...prev, product ] )
    let isItemExit = wishlist.find((item) => item._id === product._id);
    if (isItemExit) {
      setWishList((prev) =>
        prev.map((item) =>
          item._id === isItemExit._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setWishList((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    cart.map((cartItem) => (totalPrice += cartItem.price * cartItem.quantity));
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const addToCart = (product) => {
    let isItemExit = cart.find((item) => item._id === product._id);
    if (isItemExit) {
      setCart((prev) =>
        prev.map((item) =>
          item._id === isItemExit._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (_id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (_id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === _id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item, quantity: 1 }
          : item
      )
    );
  };

  const removeFromWishList = (id) => {
    // for underStanding purpose
    // let temproduct = wishlist
    // temproduct = temproduct.filter(item => item._id !== id)
    // setWishList(temproduct);

    setWishList((wishlistProducts) =>
      wishlistProducts.filter((item) => item._id !== id)
    );
  };

  const removeToCart = (id) => {
    setCart((wishlistProducts) =>
      wishlistProducts.filter((item) => item._id !== id)
    );
  };

  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        setWishList,
        addToWishList,
        removeFromWishList,
        addToCart,
        cart,
        setCart,
        removeToCart,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

const useWish = () => useContext(wishlistContext);

export { WishProvider, useWish };
