import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import LinedInput from '..';

describe('LinedInput', () => {
  const defaultProps = {
    id: 'name',
    name: 'name',
    value: 'value',
    label: 'Name',
    onChange: jest.fn(),
    type: 'text',
    hasError: false,
  };

  describe('snapshot tests', () => {
    describe('when the component has just the defaultprops', () => {
      it('renders the LinedInput normally', () => {
        const component = renderer.create(<LinedInput {...defaultProps} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('when the componente also has the flag hasError as prop', () => {
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
    describe('when the value is changed', () => {
      it('calls the callback funcation', () => {
        const onChangeCallback = jest.fn();
        const wrapper = mount(
          <LinedInput
            {...defaultProps}
            onChange={onChangeCallback}
          />,
        );

        wrapper.find('.lined-input__field').simulate('change');
        expect(onChangeCallback).toHaveBeenCalledTimes(1);
      });
    });
  });
});
