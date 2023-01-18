import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';
import productsReducer from './products';
import activeCategoryReducer from './active-category';
import cartReducer from './cart';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  activeCategory: activeCategoryReducer,
  cart: cartReducer
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}