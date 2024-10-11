import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import Checkout from '../Checkout/Checkout';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
function App() {
 const dispatch = useDispatch();
 const fetchPizza = () => {
  axios({
    method: 'GET',
    url: '/api/pizza'
  })
    .then((response) => {
      // response.data is the array of artists
      console.log(response.data);
      // TODO - update this to dispatch to Redux
      dispatch({
        type : 'SET_PIZZA',
        payload : response.data 
      })
    })
    .catch((error) => {
      console.log('error on GET', error);
    });
};
  useEffect(() => {
    console.log('in useEffect');
  fetchPizza();
  }, []);


  
const cart = useSelector(store => store.cartStore);  
const totalAmount = cart.reduce((total, pizza) => total + Number(pizza.price), 0);
const totalItems = cart.length;
console.log('In Cart we have',totalItems, totalAmount)


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        
      </header>
  
      <h2 className='App-header-total'>Total : $ {totalAmount} </h2>

      
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      
      <Router>
        <div>
        <ul>
        <li><Link to="/PizzaList">PizzaList</Link></li>
        <li><Link to ="/Checkout">Checkout</Link></li>

        </ul>
        
        <Route exact path="/"></Route>
              
        <Route path = "/PizzaList">
        <PizzaList/>
        </Route>
        <Route path = "/Checkout">
        <Checkout/>
        </Route>
        </div>
      </Router>

  
    </div>
  );
}

export default App;
