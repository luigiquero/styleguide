import React from 'react';
import renderer from 'react-test-renderer';
import Card from '..';

describe('Card', () => {
  it('should render card properly', () => {
    const component = renderer.create(<Card>my card</Card>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
