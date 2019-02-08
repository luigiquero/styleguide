import React from 'react';
import renderer from 'react-test-renderer';
import FormGroup from '..';

describe('FormGroup', () => {
  describe('when there is not any prop', () => {
    it('renders the FormGroup', () => {
      const component = renderer.create(
        <FormGroup>
          <div />
        </FormGroup>,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when the errorMessage prop has been filled', () => {
    it('renders the FormGroup with error', () => {
      const errorMessage = 'test';
      const component = renderer.create(
        <FormGroup errorMessage={errorMessage}>
          <div />
        </FormGroup>,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
