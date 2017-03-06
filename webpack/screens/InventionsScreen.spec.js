import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { InventionsScreen } from './InventionsScreen';

const getMounted = (props) => <InventionsScreen inventions={[]} {...props} />;

describe('InventionsScreen', () => {
  describe('onMount', () => {
    it('calls onMount when mounted', () => {
      const onMount = expect.createSpy();
      mount(getMounted({ onMount }));
      expect(onMount).toHaveBeenCalled();
    });
  });
});
