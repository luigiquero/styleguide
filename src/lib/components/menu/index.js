import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './item';
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
