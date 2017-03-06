import { combineReducers } from 'redux';
import * as types from './types';

const inventions = (state = [], action) => {
  switch (action.type) {
    case types.ADD_INVENTION:
      return [...state, action.payload];
    case types.SET_MATERIALS_FOR_INVENTION:
      return state.map((invention) => {
        const { id, materials } = action.payload;
        if (invention.id === id) {
          return {
            ...invention,
            materials,
          };
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
