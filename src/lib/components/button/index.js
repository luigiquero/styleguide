import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ children, mod }) => (
  <button className={`button ${mod}`}>{ children }</button>
);

Button.defaultProps = {
  mod: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  mod: PropTypes.oneOf(['button--primary']),
};

export default Button;
