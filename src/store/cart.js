const initialState = [];

function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'DECREMENT_STOCK':
      return [...state, payload];
    default:
      return state;
  }
}

export default cartReducer;