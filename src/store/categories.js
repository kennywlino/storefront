import { createAction } from '@reduxjs/toolkit';
import axios from "axios";

const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = createAction(SET_CATEGORIES);

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(response.data.results));
}

const initialState = [];

function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'SET_CATEGORIES':
      return payload;
  default:
    return state;
  }
}

export default categoriesReducer;