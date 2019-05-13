import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './dropdown.scss';

const Dropdown = ({ active, children }) => {
  const dropdownClassName = classNames(
    'menu__dropdown',
    { 'menu__dropdown--active': active },
  );

  return (
    <ul className={dropdownClassName}>
      {children}
    </ul>
  );
};

Dropdown.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
  active: false,
};


export default Dropdown;
