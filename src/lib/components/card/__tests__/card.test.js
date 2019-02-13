import React from 'react';
import renderer from 'react-test-renderer';
import Card from '..';

describe('Card', () => {
  it('should render card properly', () => {
    const component = renderer.create(<Card>my card</Card>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('with featured modifier', () => {
    it('should render card properly', () => {
      const component = renderer.create(<Card featured>small link</Card>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('whith custom class', () => {
    it('should render card properly', () => {
      const component = renderer.create(<Card className="my classes">my card</Card>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
