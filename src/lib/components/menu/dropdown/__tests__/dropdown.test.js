import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '..';

describe('Link', () => {
  const defaultProps = {
    active: false,
    links: [
      { title: 'Test' },
      { title: 'Test2', url: '#' },
    ],
  };

  it('when is inactive', () => {
    const component = renderer.create(<Dropdown {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when is active should have active modifier', () => {
    const component = renderer.create(<Dropdown {...defaultProps} active />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
