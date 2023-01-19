import cartReducer from "./cart";
import { createStore, combineReducers } from 'redux';
import { addItem, removeItem } from './actions';

describe('Cart reducer', () => {
  const reducers = combineReducers({
    cart: cartReducer,
  });
  const store = createStore(reducers);

  test('provides initial state', () => {
    let state = store.getState();

    expect(state.cart.length).toEqual(0);
    expect(state.cart).toBeTruthy();
  });

  test('adds and removes products', () => {
    let state = store.getState();
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 15}

    store.dispatch(addItem(productOne));
    store.dispatch(addItem(productTwo));
    state = store.getState();
    expect(state.cart.length).toEqual(2);
    expect(state.cart[0].name).toEqual('product one');
    expect(state.cart[1].name).toEqual('product two');
  });

})