import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '..';

describe('Menu', () => {
  const defaultProps = {
    className: 'class',
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
    const component = renderer.create(<Menu {...defaultProps} minified />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
