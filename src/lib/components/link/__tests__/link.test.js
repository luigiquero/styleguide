import React from 'react';
import renderer from 'react-test-renderer';
import Link from '..';

describe('Link', () => {
  describe('with url', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link url="/test">link with href</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with target', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link url="/test" target="_blank">link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with small modifier', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link url="/test" small>small link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with custom class', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link url="/test" className="my classes">my link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
