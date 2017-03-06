import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Invention from './index';

const getMounted = (props) => <Invention {...props} />;

describe('InventionsScreen', () => {
  describe('handleChange', () => {
    it('calls onChange with changed props', () => {
      const title = 'foo';
      const newUsername = 'baz';
      const initialProps = { title, username: 'bar', bits: [], materials: [] };
      const changedProps = { username: newUsername };
      const expected = { title, username: newUsername, bits: [], materials: [] };
      const onChange = expect.createSpy();
      const mounted = mount(getMounted({ ...initialProps, onChange }));
      mounted.instance().handleChange(changedProps);
      expect(onChange).toHaveBeenCalledWith(expected);
    });
  });
});
