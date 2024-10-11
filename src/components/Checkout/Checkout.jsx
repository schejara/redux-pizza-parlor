import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Order from "../App/Order/Order";

function Checkout() {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cartStore);
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        streetAddress: '',
        city: '',
        zip: '',
        phone: '',
        orderType: 'pickup'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCustomerInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const pizzaOrder = () => {
        dispatch({
            type: 'ORDER_PIZZA',
            payload: {
                customerInfo,
                pizzas: cart
            }
        });
       
    };

    return (
        <div>
            <h3>Customer Information</h3>
            <form onSubmit={(e) => { e.preventDefault(); pizzaOrder(); }}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={customerInfo.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Street Address:
                        <input
                            type="text"
                            name="streetAddress"
                            value={customerInfo.streetAddress}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        City:
                        <input
                            type="text"
                            name="city"
                            value={customerInfo.city}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        ZIP Code:
                        <input
                            type="text"
                            name="zip"
                            value={customerInfo.zip}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={customerInfo.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Order Type:
                        <select
                            name="orderType"
                            value={customerInfo.orderType}
                            onChange={handleChange}
                        >
                            <option value="pickup">Pickup</option>
                            <option value="delivery">Delivery</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Proceed</button>
            </form>
            
        </div>
    );
}

export default Checkout;
