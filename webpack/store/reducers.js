import { combineReducers } from 'redux';
import * as types from './types';

const inventions = (state = [], action) => {
  switch (action.type) {
    case types.ADD_INVENTION:
      return [...state, action.payload];
    case types.SET_INVENTION:
      return state.map((invention) => {
        const updatedInvention = action.payload;
        if (invention.id === updatedInvention.id) {
          return updatedInvention;
        }
        return invention;
      });
    default:
      return state;
  }
};

const reducers = {
  inventions,
};

export default combineReducers(reducers);
