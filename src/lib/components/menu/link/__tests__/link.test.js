import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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

    it('should render link properly with title instead of children', () => {
      const component = renderer.create(<Link title="my link" />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('without onClick prop', () => {
    it('should render link properly', () => {
      const component = renderer.create(<Link onClick={() => {}}>my link</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render link properly with title instead of children', () => {
      const props = { onClick: jest.fn() };
      const wrapper = mount(<Link {...props}>my link</Link>);
      const spy = jest.spyOn(props, 'onClick');

      wrapper.find('.menu__link').simulate('click');

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('with modifiers', () => {
    it('with active truthy', () => {
      const component = renderer.create(<Link active>test</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with child truthy', () => {
      const component = renderer.create(<Link child>test</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with active and child truthy', () => {
      const component = renderer.create(<Link active child>test</Link>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with badge', () => {
    it('should render badge inside link', () => {
      const component = renderer.create(<Link badge="yep">test</Link>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
