import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '..';

describe('Logo menu component', () => {
  it('should render properly when is not minified', () => {
    const component = renderer.create(<Logo minified={false} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render properly when is minified', () => {
    const component = renderer.create(<Logo minified />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
