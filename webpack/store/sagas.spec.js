import expect from 'expect';
import { call, put } from 'redux-saga/effects';
import * as types from './types';
import { getInventions } from '../lib/api';
import { fetchInventions } from './sagas';

describe('sagas', () => {
  describe('getInventions', () => {
    it('gets inventions via api and sets them via actions', () => {
      const invention = { foo: 'bar' };
      const expectedApiEffect = call(getInventions);

      const expectedActions = [
        put({
          type: types.ADD_INVENTION,
          payload: invention,
        }),
      ];

      const gen = fetchInventions();
      expect(gen.next().value).toEqual(expectedApiEffect);
      expect(gen.next([invention]).value).toEqual(expectedActions);
      expect(gen.next().done).toBeTruthy();
    });
  });
});
