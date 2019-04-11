/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './item';
import './menu.scss';

const Menu = (props) => {
  const menuItems = props.links;
  const {
    minified,
    className,
  } = props;

  const classes = classNames(
    className,
    'menu',
    { 'menu--minified': minified },
  );

  return (
    <div className={classes}>
      <ul className="menu__nav">
        {
          menuItems.map(({
            title,
            url,
            icon,
            target,
            active,
            links,
            onClick,
          }) => (
            <Item
              title={title}
              icon={icon}
              url={url}
              target={target}
              active={active}
              links={links}
              key={title.toLowerCase()}
              onClick={onClick}
            />
          ))
        }
      </ul>
    </div>
  );
};

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  className: PropTypes.string,
  minified: PropTypes.bool,
};

Menu.defaultProps = {
  className: null,
  minified: false,
};

export default Menu;
