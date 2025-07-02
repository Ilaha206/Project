import { createContext, useEffect, useState } from "react"



export const WishlistContext = createContext()
function WishlistProvider({ children }) {
    const [wishlist, setwishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


    function handleWishlist(item) {
        const atWishlist = wishlist.some(x => x._id === item._id)
        if (atWishlist) {
            setwishlist(wishlist.filter(x => x._id !== item._id))
        }
        else {
            setwishlist([...wishlist, item])
        }
    }

    function checkAtWishlist(item) {
        return wishlist.some(x => x._id === item._id)
    }

    return (
        <WishlistContext.Provider value={{ wishlist, handleWishlist, checkAtWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}   

export default WishlistProvider