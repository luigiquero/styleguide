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

  describe('with custom class', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link url="/test" className="my classes">my link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with modifier', () => {
    describe('primary', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link primary>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('secondary', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link secondary>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('tertiary', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link tertiary>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('small', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link url="/test" small>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('medium', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link medium>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('large', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link large>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('block', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link block>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('compose by primary and large and block', () => {
      it('should render link properly', () => {
        const component = renderer.create(<Link primary large block>Test</Link>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
