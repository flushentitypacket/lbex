import { combineReducers } from 'redux';
import * as types from './types';

const inventions = (state = [], action) => {
  switch (action.type) {
    case types.ADD_INVENTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

const reducers = {
  inventions,
};

export default combineReducers(reducers);
