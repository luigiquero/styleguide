import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Menu from '..';

describe('Menu', () => {
  const defaultProps = {
    className: 'class',
    children: (
      <Fragment>
        <Menu.Item title="Visão Geral" icon={['fas', 'store']} />
        <Menu.Item
          title="Relatórios"
          icon={['fas', 'analytics']}
          active
        >
          <Menu.SubItem title="Raio X" />
          <Menu.SubItem title="Eventos e motivos" active />
        </Menu.Item>
      </Fragment>
    ),
  };

  it('should render properly', () => {
    const component = renderer.create(<Menu {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render minified properly', () => {
    const component = renderer.create(<Menu {...defaultProps} collapsed />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should minify on click on  toggle', () => {
    const onToggle = jest.fn();
    const wrapper = mount(<Menu onToggle={onToggle} {...defaultProps} />);
    wrapper.find('.menu__header').simulate('click');
    expect(wrapper.find('.menu').hasClass('menu--collapsed')).toBeTruthy();
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('should back minification on second click on minified toggle', () => {
    const onToggle = jest.fn();
    const wrapper = mount(<Menu onToggle={onToggle} {...defaultProps} />);
    const menuHeader = wrapper.find('.menu__header');
    menuHeader.simulate('click');
    menuHeader.simulate('click');
    expect(wrapper.find('.menu').hasClass('menu--collapsed')).toBeFalsy();
    expect(onToggle).toHaveBeenCalledTimes(2);
  });
});
