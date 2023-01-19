const initialState = '';

function activeCategoryReducer (state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'SELECT_CATEGORY':
      return payload.name;
    case 'RESET':
      return initialState;
    default: 
      return state
  }
}

export default activeCategoryReducer;