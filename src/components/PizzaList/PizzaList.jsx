import React from "react";
import { useSelector } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";

function PizzaList(){
    const pizzaList = useSelector(store => store.pizzaStore || []);
return(

    <div>
        <ul>
        {pizzaList.map((pizza) => {
            console.log(pizza);
            return (
              <PizzaItem
                key={pizza.id}
                pizza = {pizza}
                
              />
            );
          })}
        </ul>
    </div>

)

}
export default PizzaList