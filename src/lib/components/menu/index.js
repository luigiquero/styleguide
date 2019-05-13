/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './item';
import './menu.scss';
import Logo from './logo';
import BurguerIcon from './burguer-icon.svg';
import useExpanded from '../../hooks/useExpanded';
import MenuContext from './context';
import SubItem from './sub-item';
import FullScreenOverlay from '../fullscreen-overlay';

const { Provider } = MenuContext;

const Menu = ({
  className,
  children,
  initialState,
  onToggle,
}) => {
  const menu = useExpanded(initialState.expanded, onToggle);
  const { expanded, toggle } = menu;

  const classes = classNames(
    className,
    'menu',
    { 'menu--expanded': expanded },
    { 'menu--collapsed': !expanded },
  );

  return (
    <Provider value={menu}>
      <div className={classes}>
        <div
          className="menu__header"
          role="presentation"
          onClick={toggle}
        >
          <div className="menu__burguer">
            <img
              src={BurguerIcon}
              alt="Minificar menu"
              className="menu__burguer__image"
            />
          </div>
          <Logo collapsed={!expanded} />
        </div>
        <ul className="menu__nav">
          {children}
        </ul>
      </div>
      <FullScreenOverlay
        className={classNames(
          'menu__fullscreen_overlay',
          { 'menu__fullscreen_overlay--visible': expanded },
        )}
        onClick={toggle}
      />
    </Provider>
  );
};

Object.assign(Menu, { Item, SubItem });

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onToggle: PropTypes.func,
  initialState: PropTypes.shape({
    expanded: PropTypes.bool,
  }),
};

Menu.defaultProps = {
  className: null,
  onToggle: () => { },
  initialState: {
    expanded: true,
  },
};

export { MenuContext };
export default Menu;
