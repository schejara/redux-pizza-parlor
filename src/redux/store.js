import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaStore = (state = [], action) => {
  if(action.type === 'SET_PIZZA'){

    return action.payload
  }
  return state;
}

const cartStore = (state =[], action) =>{
  if(action.type === 'ADD_PIZZA'){
    //return action.payload
    return [...state,action.payload]
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzaStore,// 👈 Be sure to replace this, too!
    cartStore
  }),

  applyMiddleware(logger),
);


export default store;
