import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '..';
import SubItem from '../../sub-item';

describe('Link', () => {
  const defaultProps = {
    active: false,
    children: (
      <Fragment>
        <SubItem title="Test" />
        <SubItem title="Test2" url="#" />
      </Fragment>
    ),
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
