const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
};

function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
  case 'INCREMENT':
    return {};
  case 'DECREMENT':
    return {};
  default:
    return state;
  }
}

export default categoriesReducer;