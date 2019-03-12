import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './logo';
import Item from './item';
import BurguerIcon from './burguer-icon.svg';
import './menu.scss';

const Menu = ({
  minified,
  links,
}) => {
  const className = classNames(
    'menu',
    { 'menu--minified': minified },
  );

  return (
    <div className={className}>
      <div className="menu__header">
        <Logo />
        <img src={BurguerIcon} alt="Minificar menu" className="menu__burguer" />
      </div>

      <ul className="menu__nav">
        { links.map(linkProps => <Item {...linkProps} />) }
      </ul>
    </div>
  );
};

Menu.propTypes = {
  minified: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Menu;
