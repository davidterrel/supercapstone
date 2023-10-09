import { createContext, useEffect, useState, UseContext, useContext } from "react";
import { ProductContext } from "./ProductContext";
export const ShopContext = createContext(null);



export default function ShopContextProvider(props) {
    const { PRODUCTS } = useContext(ProductContext)
    console.log(PRODUCTS)


    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;

    };
    const [cartItems, setCartItems] = useState(getDefaultCart());
    console.log(cartItems)
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };
    const addToCart = (itemId) => {
        console.log(itemId)
        setCartItems((prev) => {
            // Ensure the previous item count is a valid number
            const previousCount = Number.isFinite(prev[itemId]) ? prev[itemId] : 0;
            return { ...prev, [itemId]: previousCount + 1 };
        });
    };
    // const addToCart = (itemId) => {
    //     console.log(itemId)
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    return (
        <>

            <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
        </>
    )
};