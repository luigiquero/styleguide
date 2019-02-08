import React from 'react';
import renderer from 'react-test-renderer';
import LinedInputGroup from '..';

describe('LinedInputGroup', () => {
  it('renders the LinedInputGroup', () => {
    const component = renderer.create(
      <LinedInputGroup
        id="name1"
        label="Name 1"
        value="Test"
        onChange={jest.fn()}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
