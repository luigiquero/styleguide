import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Topbar from '..';

describe('Topbar', () => {
  const defaultProps = {
    avatarURL: 'https://placekitten.com/32/32',
    name: 'Felino da Silva',
    role: 'Gerente',
    links: [
      { title: 'Editar perfil', icon: ['far', 'pen'], url: '#1' },
      { title: 'Sair', icon: ['far', 'sign-out-alt'], url: '#2' },
    ],
    clickOnFilterButton: () => {},
    onLogoClick: () => {},
  };

  it('should renders properly', () => {
    const component = renderer.create(<Topbar {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when there is children', () => {
    it('renders children with with-info modifier', () => {
      const component = renderer.create(
        <Topbar {...defaultProps}>
          <span>topbar</span>
        </Topbar>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when state settingsActive is falsy (by default)', () => {
    it('should not include Settings', () => {
      const wrapper = mount(<Topbar {...defaultProps} />);
      expect(wrapper.exists('.topbar-settings')).toBeFalsy();
    });
  });

  describe('showFilterButton', () => {
    describe('when it is true', () => {
      it('should include Settings', () => {
        const component = renderer.create(<Topbar {...defaultProps} showFilterButton />);
        expect(component.toJSON()).toMatchSnapshot();
      });
    });

    describe('when it is false', () => {
      it('should include Settings', () => {
        const component = renderer.create(<Topbar {...defaultProps} showFilterButton={false} />);
        expect(component.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('when state settingsActive is truthly', () => {
    it('should include Settings', () => {
      const wrapper = mount(<Topbar {...defaultProps} />);
      wrapper.setState({ settingsActive: true });
      expect(wrapper.exists('.topbar-settings')).toBeTruthy();
    });
  });

  describe('.toggleSettings', () => {
    describe('when state settingsActive is falsy', () => {
      it('should change state to true', () => {
        const wrapper = mount(<Topbar {...defaultProps} />);
        wrapper.instance().toggleSettings();
        expect(wrapper.state('settingsActive')).toBeTruthy();
      });
    });

    describe('when state settingsActive is truthly', () => {
      it('should change state to false', () => {
        const wrapper = mount(<Topbar {...defaultProps} />);
        wrapper.setState({ settingsActive: true });
        wrapper.instance().toggleSettings();
        expect(wrapper.state('settingsActive')).toBeFalsy();
      });
    });
  });

  describe('on filter button click', () => {
    it('should trigger clickOnFilterButton prop fuction', () => {
      const spy = jest.spyOn(defaultProps, 'clickOnFilterButton');
      const wrapper = mount(<Topbar {...defaultProps} />);
      wrapper.find('.button').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('on logo click', () => {
    it('should trigger onLogoClick prop fuction', () => {
      const spy = jest.spyOn(defaultProps, 'onLogoClick');
      const wrapper = mount(<Topbar {...defaultProps} />);
      wrapper.find('.topbar__brand').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
