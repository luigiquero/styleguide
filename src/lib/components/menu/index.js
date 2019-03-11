import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './item';
import LogoIn from './logo-in.svg';
import LogoDeva from './logo-deva.svg';
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
        <div className="menu__logo-wrapper">
          <img src={LogoIn} className="menu__logo menu__logo--in" />
          <img src={LogoDeva} className="menu__logo menu__logo--deva" />
        </div>
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
