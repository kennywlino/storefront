import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import categoriesReducer from './categories';
import activeCategoryReducer from './active-category';

let reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  activeCategory: activeCategoryReducer,

});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}