import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Menu from '..';

describe('Menu', () => {
  const defaultProps = {
    links: [
      { title: 'Visão Geral', icon: ['fas', 'store'] },
      {
        title: 'Relatórios',
        icon: ['fas', 'analytics'],
        active: true,
        links: [
          { title: 'Raio X' },
          { title: 'Eventos e motivos', active: true },
        ],
      },
    ],
  };

  it('should render properly', () => {
    const component = renderer.create(<Menu {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render minified properly', () => {
    const component = renderer.create(<Menu {...defaultProps} />);
    component.root.instance.setState({ minified: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should minify on click on minified toggle', () => {
    const wrapper = mount(<Menu {...defaultProps} />);
    wrapper.find('.menu__header').simulate('click');
    expect(wrapper.find('.menu').hasClass('menu--minified')).toBeTruthy();
  });

  it('should back minification on second click on minified toggle', () => {
    const wrapper = mount(<Menu {...defaultProps} />);
    const menuHeader = wrapper.find('.menu__header');
    menuHeader.simulate('click');
    menuHeader.simulate('click');
    expect(wrapper.find('.menu').hasClass('menu--minified')).toBeFalsy();
  });
});
