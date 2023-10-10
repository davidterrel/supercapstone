import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function CartItem(props) {
    const { id, title, price, image } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);
    console.log(props)
    return (
        <>
            <div className="cartItem">
                <img src={image} />
                <div className="description">
                    <p>
                        <b>{title}</b>
                    </p>
                    <p> Price: ${price}</p>
                    <div className="countHandler">
                        <button onClick={() => removeFromCart(id)}> - </button>
                        <input
                            value={cartItems[id]}
                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                        />
                        <button onClick={() => addToCart(id)}> + </button>
                    </div>
                </div>
            </div>
        </>
    );
};