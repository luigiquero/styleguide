import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '..';

describe('Topbar Settings', () => {
  const defaultProps = {
    name: 'Felino de Santos',
    role: 'Gerente',
    links: [
      { title: 'Editar perfil', icon: ['far', 'pen'], url: 'https://indeva.com.br/' },
      { title: 'Sair', icon: ['far', 'sign-out-alt'], url: 'https://indeva.com.br/beneficios/' },
    ],
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
});
