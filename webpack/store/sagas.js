import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as types from './types';
import { getInventions, updateInvention } from '../lib/api';

export function* fetchInventions() {
  const inventions = yield call(getInventions);
  yield inventions.map(invention => put({
    type: types.ADD_INVENTION,
    payload: invention,
  }));
}

export function* requestUpdateInvention(action) {
  const { id, ...invention } = action.payload;
  yield call(() => updateInvention({ id, invention }));
}

function* saga() {
  yield [
    takeLatest(types.FETCH_INVENTIONS, fetchInventions),
    takeLatest(types.UPDATE_INVENTION, requestUpdateInvention),
  ];
}

export default saga;
