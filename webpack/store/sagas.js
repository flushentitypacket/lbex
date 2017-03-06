import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as types from './types';
import { getInventions } from '../lib/api';

export function* fetchInventions() {
  const inventions = yield call(getInventions);
  yield inventions.map(invention => put({
    type: types.ADD_INVENTION,
    payload: invention,
  }));
}

function* saga() {
  yield takeLatest(types.FETCH_INVENTIONS, fetchInventions);
}

export default saga;
