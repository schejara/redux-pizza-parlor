
import React from "react";

import { useDispatch } from "react-redux";

function pizzaItem({pizza}){
    const dispatch = useDispatch();
    const addPizza = () => {
     dispatch({
      type : 'ADD_PIZZA',
      payload : pizza

     })
    }
 
    
return(
    <div>

<div>{pizza.name}</div>
<div>{pizza.description}</div>
<div>{pizza.price}</div>
<button onClick={addPizza}>Add to Cart</button>
</div>
)

}
export default pizzaItem