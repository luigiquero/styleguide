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

  describe('with custom class', () => {
    it('renders the LinedInputGroup', () => {
      const component = renderer.create(
        <LinedInputGroup
          id="id"
          name="name"
          label="Name 1"
          value="Test"
          onChange={jest.fn()}
          onBlur={jest.fn()}
          className="my class"
        />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
