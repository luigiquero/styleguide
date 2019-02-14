import React from 'react';
import renderer from 'react-test-renderer';
import LinedInputGroup from '..';

describe('LinedInputGroup', () => {
  it('renders the LinedInputGroup', () => {
    const component = renderer.create(
      <LinedInputGroup
        fieldRef={jest.fn()}
        id="id"
        name="name"
        label="Name 1"
        value="Test"
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
