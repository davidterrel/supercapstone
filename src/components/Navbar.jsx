import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css"

export default function Navbar({ filterKey, setFilterKey }) {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setFilterKey(inputValue); // Update the filterKey state in App.jsx
    };
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    )
}
