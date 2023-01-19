const initialState = [];

function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'DECREMENT_STOCK':
      return [...state, payload];
    case 'INCREMENT_STOCK':
      return state.filter(product => product.name !== payload.name)
    default:
      return state;
  }
}

export default cartReducer;