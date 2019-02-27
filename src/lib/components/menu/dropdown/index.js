import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../link';
import './dropdown.scss';

const Dropdown = ({
  active,
  links,
}) => {
  const dropdownClassName = classNames(
    'menu__dropdown',
    { 'menu__dropdown--active': active },
  );

  return (
    <ul className={dropdownClassName}>
      {
        links.map(childParams => (
          <li className="menu__item menu__item--child">
            <Link child {...childParams} />
          </li>
        ))
      }
    </ul>
  );
};

Dropdown.propTypes = {
  active: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

Dropdown.defaultProps = {
  active: false,
};


export default Dropdown;
