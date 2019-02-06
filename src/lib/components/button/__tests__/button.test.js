import React from 'react';
import renderer from 'react-test-renderer';
import Button from '..';

describe('Button', () => {
  it('should render button properly', () => {
    const component = renderer.create(<Button>Test</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('with modifier', () => {
    describe('primary', () => {
      it('should render button properly', () => {
        const component = renderer.create(<Button primary>Test</Button>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('secondary', () => {
      it('should render button properly', () => {
        const component = renderer.create(<Button secondary>Test</Button>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('tertiary', () => {
      it('should render button properly', () => {
        const component = renderer.create(<Button tertiary>Test</Button>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('medium', () => {
      it('should render button properly', () => {
        const component = renderer.create(<Button medium>Test</Button>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('large', () => {
      it('should render button properly', () => {
        const component = renderer.create(<Button large>Test</Button>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('block', () => {
      it('should render button properly', () => {
        const component = renderer.create(<Button block>Test</Button>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('compose by primary and large and block', () => {
      it('should render button properly', () => {
        const component = renderer.create(<Button primary large block>Test</Button>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('with type', () => {
    describe('submit', () => {
      const component = renderer.create(<Button type="submit">Test</Button>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    describe('reset', () => {
      const component = renderer.create(<Button type="reset">Test</Button>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
