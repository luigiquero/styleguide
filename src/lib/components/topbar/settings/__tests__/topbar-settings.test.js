import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Settings from '..';

describe('Topbar Settings', () => {
  const defaultProps = {
    name: 'Felino de Santos',
    email: 'felino@teste.com',
    links: [
      { title: 'Editar perfil', icon: ['far', 'pen'], url: 'https://indeva.com.br/' },
      { title: 'Sair', icon: ['far', 'sign-out-alt'], url: 'https://indeva.com.br/beneficios/' },
    ],
    toggleSettings: () => {},
  };

  it('should renders properly', () => {
    const component = renderer.create(<Settings {...defaultProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without active modifier', () => {
    const component = renderer.create(<Settings {...defaultProps} />);
    component.root.instance.setState({ visible: false });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('on lifecycle events', () => {
    describe('on componentDidMount', () => {
      it('should call document.addEventListener', () => {
        const spy = jest.spyOn(document, 'addEventListener');
        mount(<Settings {...defaultProps} />);
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });

    describe('on componentWillUnmount', () => {
      it('should call document.removeEventListener', () => {
        const spy = jest.spyOn(document, 'removeEventListener');
        const wrapper = mount(<Settings {...defaultProps} />);
        wrapper.unmount();
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
