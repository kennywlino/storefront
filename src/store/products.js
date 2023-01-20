import axios from "axios";


export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  console.log(response.data.results);
  dispatch(setProducts(response.data.results))
}

const initialState = [];

function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'SET_PRODUCTS':
      return payload;
    case 'SELECT_CATEGORY':
      return (
        state.filter(product => product.category === payload.name)
      )
    case 'DECREMENT_STOCK':
      return (
        state.map(product => product.name === payload.name ? 
          {
            name: product.name,
            category: product.category,
            price: product.price,
            inStock: product.inStock - 1,
          } : product)
      )
    case 'RESET':
      return initialState;
    default: 
      return state
  }
}

export default productsReducer;