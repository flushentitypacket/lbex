import * as types from './types';

export const addInvention = (invention) => ({
  type: types.ADD_INVENTION,
  payload: invention,
});

export const fetchInventions = () => ({
  type: types.FETCH_INVENTIONS,
});

export const updateInvention = (invention) => ({
  type: types.UPDATE_INVENTION,
  payload: invention,
});

export const setInvention = (invention) => ({
  type: types.SET_INVENTION,
  payload: invention,
});
