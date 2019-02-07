/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

const Button = ({
  children,
  type,
  primary,
  secondary,
  tertiary,
  medium,
  large,
  block,
}) => {
  const className = classNames(
    'button',
    {
      'button--primary': primary,
      'button--secondary': secondary,
      'button--tertiary': tertiary,
      'button--medium': medium,
      'button--large': large,
      'button--block': block,
    },
  );

  return (
    <button type={type} className={className}>
      { children }
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  primary: false,
  secondary: false,
  tertiary: false,
  medium: false,
  large: false,
  block: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  block: PropTypes.bool,
};

export default Button;
