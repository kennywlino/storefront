const initialState = [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ]

function categoriesReducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
  default:
    return state;
  }
}

export default categoriesReducer;