import React from 'react';
import renderer from 'react-test-renderer';
import Link from '..';

describe('Link', () => {
  describe('with url', () => {
    it('should render link with href', () => {
      const component = renderer.create(<Link url="/test">link with href</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render link with target', () => {
      const component = renderer.create(<Link url="/test" target="_blank">link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('without url', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link>my link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
