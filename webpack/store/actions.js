import * as types from './types';

export const addInvention = (invention) => ({
  type: types.ADD_INVENTION,
  payload: invention,
});

export const fetchInventions = () => ({
  type: types.FETCH_INVENTIONS,
})
