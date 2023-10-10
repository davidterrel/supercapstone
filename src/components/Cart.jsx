import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { ProductContext } from "../context/ProductContext";




export default function Cart() {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const { PRODUCTS } = useContext(ProductContext)
    const navigate = useNavigate();
    console.log(cartItems, PRODUCTS)
    return (
        <>
            <div className="cart">
                <div>
                    <h1>Your Cart Items</h1>
                </div>
                <div className="cart">
                    {PRODUCTS.filter(product => cartItems[product.id] > 0).map((product) => {
                        return <CartItem key={product.id} data={product} />;
                    })}

                </div>

                {totalAmount > 0 ? (
                    <div className="checkout">
                        <p> Subtotal: ${totalAmount} </p>
                        <button onClick={() => navigate("/")}> Continue Shopping </button>
                        <button
                            onClick={() => {
                                checkout();
                                navigate("/checkout");
                            }}
                        >
                            {" "}
                            Checkout{" "}
                        </button>
                    </div>
                ) : (
                    <h1> Your Shopping Cart is Empty</h1>
                )}
            </div>
        </>
    );
};