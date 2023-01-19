export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  }
}

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  }
}

export const decrementStock = (product) => {
  return {
    type: 'DECREMENT_STOCK',
    payload: product
  }
}

export const incrementStock = (product) => {
  return {
    type: 'INCREMENT_STOCK',
    payload: product
  }
}