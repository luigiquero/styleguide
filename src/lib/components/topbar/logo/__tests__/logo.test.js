import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '..';

describe('Logo menu component', () => {
  it('should render properly', () => {
    const component = renderer.create(<Logo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
