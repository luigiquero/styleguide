import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Item from '..';

describe('Item', () => {
  describe('without links', () => {
    it('without url should render properly', () => {
      const component = renderer.create(<Item title="Test" />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with url should render properly', () => {
      const component = renderer.create(<Item title="Test" url="#" />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with url and target should render properly', () => {
      const component = renderer.create(
        <Item title="Test" url="#" target="_blank" />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with active truthly should render properly', () => {
      const component = renderer.create(
        <Item title="Test" active />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with active truthly should render properly', () => {
      const component = renderer.create(
        <Item title="Test" active />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with icon should render with icon', () => {
      const component = renderer.create(
        <Item title="Test" icon={['fal', 'igloo']} />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with links', () => {
    const defaultProps = {
      title: 'Test',
      active: false,
      links: [
        { title: 'Test' },
        { title: 'Test2', active: true },
        { title: 'Test3', url: '#' },
        { title: 'Test4', url: '#', target: '_blank' },
      ],
    };

    it('should render properly', () => {
      const component = renderer.create(
        <Item {...defaultProps} />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    describe('when item is active', () => {
      it('should render properly', () => {
        const component = renderer.create(
          <Item {...defaultProps} active />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('should render dropdown with active modifier', () => {
        const wrapper = mount(
          <Item {...defaultProps} active />,
        );
        const dropdown = wrapper.find('.menu__dropdown');
        expect(dropdown.hasClass('menu__dropdown--active')).toBeTruthy();
      });
    });
  });
});
