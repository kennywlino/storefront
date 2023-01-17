import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';

let reducers = combineReducers({
  products: productsReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}