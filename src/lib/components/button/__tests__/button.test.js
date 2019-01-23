import React from 'react';
import renderer from 'react-test-renderer';
import Button from '..';

describe('Button', () => {
  it('should render button properly', () => {
    const component = renderer.create(<Button>Test</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
