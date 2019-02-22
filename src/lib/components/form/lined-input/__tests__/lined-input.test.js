import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import LinedInput from '..';

describe('LinedInput', () => {
  const defaultProps = {
    fieldRef: jest.fn(),
    id: 'name',
    name: 'name',
    value: 'value',
    label: 'Name',
    type: 'text',
    hasError: false,
    onChange: () => {},
  };

  describe('snapshot tests', () => {
    describe('when the component has just the defaultprops', () => {
      it('renders the LinedInput normally', () => {
        const component = renderer.create(<LinedInput {...defaultProps} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('when the component also has the flag hasError as prop', () => {
      it('renders the LinedInput with error', () => {
        const component = renderer.create(
          <LinedInput {...defaultProps} hasError />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('behavior tests', () => {
    describe('when the value has been changed', () => {
      it('calls the callback function', () => {
        const onChangeCallback = jest.fn();
        const wrapper = mount(
          <LinedInput
            {...defaultProps}
            onChange={onChangeCallback}
          />,
        );

        wrapper.find('input').simulate('change');
        expect(onChangeCallback).toHaveBeenCalledTimes(1);
      });
    });

    describe('when the field has key pressed', () => {
      it('calls the callback function', () => {
        const onKeyDown = jest.fn();
        const wrapper = mount(
          <LinedInput
            {...defaultProps}
            onKeyDown={onKeyDown}
          />,
        );

        wrapper.find('input').simulate('keyDown');
        expect(onKeyDown).toHaveBeenCalledTimes(1);
      });
    });
  });
});
