import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SwitchControlled from 'test-helpers/controlleds/switch';
import Switch from '..';

describe('Switch', () => {
  const defaultProps = {
    name: 'name',
    value: 'value',
  };

  describe('snapshot tests', () => {
    describe('when pass only required props', () => {
      it('renders switch properly', () => {
        const component = renderer.create(<Switch {...defaultProps} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('when has label property', () => {
      it('renders switch with label', () => {
        const component = renderer.create(<Switch {...defaultProps} label="label" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('when has checked property', () => {
      it('renders switch with checked true', () => {
        const component = renderer.create(<Switch {...defaultProps} checked />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('when has disabled property', () => {
      it('renders switch with disabled true', () => {
        const component = renderer.create(<Switch {...defaultProps} disabled />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('behavior tests', () => {
    describe('when click on unchecked switch', () => {
      it('the input should be checked', () => {
        const wrapper = mount(<SwitchControlled {...defaultProps} />);

        wrapper
          .find('.switch__input')
          .simulate('change', { target: { checked: true } });

        expect(wrapper.find('.switch__input').props().checked).toBeTruthy();
      });
    });

    describe('when click on checked switch', () => {
      it('the input should be checked', () => {
        const wrapper = mount(<SwitchControlled {...defaultProps} checked />);

        wrapper
          .find('.switch__input')
          .simulate('change', { target: { checked: false } });

        expect(wrapper.find('.switch__input').props().checked).toBeFalsy();
      });
    });
  });
});
