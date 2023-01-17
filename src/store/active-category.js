
const initialState = {
  activeCategory: '',
};

function activeCategoryReducer(state = initialState, action) {
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

export default activeCategoryReducer;