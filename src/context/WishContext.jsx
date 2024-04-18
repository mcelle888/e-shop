import React, { createContext, useState, useContext } from "react";


const WishContext = createContext()

const WishProvider = ({ children }) => {
  const [isWishList, setIsWishList] = useState(false);

  const wishToggle = () => {
    setIsWishList((prevIsWishList) => !prevIsWishList);
  };

  return (
    <WishContext.Provider value={{ isWishList, wishToggle }}>
      {children}
    </WishContext.Provider>
  );
};

const useWishContext = () => useContext(WishContext);

export { WishProvider, useWishContext };
