import React from 'react';
import renderer from 'react-test-renderer';
import Badge from '..';

describe('Badge', () => {
  it('should render default badge as neutral', () => {
    const component = renderer.create(<Badge>test</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render neutral badge', () => {
    const component = renderer.create(<Badge type="neutral">test</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render brand badge', () => {
    const component = renderer.create(<Badge type="brand">test</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render success badge', () => {
    const component = renderer.create(<Badge type="success">test</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render warning badge', () => {
    const component = renderer.create(<Badge type="warning">test</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render danger badge', () => {
    const component = renderer.create(<Badge type="danger">test</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with className', () => {
    const component = renderer.create(<Badge className="test">test</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
