import React from "react";

function OrderSummary({ customerInfo, cart, totalAmount, onPlaceOrder }) {
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Customer Information</h3>
            <p>Name: {customerInfo.name}</p>
            <p>Address: {customerInfo.streetAddress}, {customerInfo.city}, {customerInfo.zip}</p>
            <p>Phone: {customerInfo.phone}</p>
            <p>Order Type: {customerInfo.orderType}</p>

            <h3>Order Details</h3>
            <ul>
                {cart.map((pizza, index) => (
                    <li key={index}>
                        {pizza.name}: ${Number(pizza.price)}
                    </li>
                ))}
            </ul>
            <h3>Total Amount: ${totalAmount}</h3>

            <button onClick={onPlaceOrder}>Place Order</button>
        </div>
    );
}

export default OrderSummary;
