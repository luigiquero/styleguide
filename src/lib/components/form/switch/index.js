/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import './switch.scss';

const Switch = ({
  name,
  type,
  value,
  checked,
  disabled,
  label,
  onChange,
}) => (
  <div className="switch">
    <input
      className="switch__input"
      type={type}
      name={name}
      id={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <span className="switch__checked" />
    { label && <label className="switch__label" htmlFor={name}>{label}</label> }
  </div>
);

Switch.defaultProps = {
  label: null,
  checked: null,
  disabled: null,
  onChange: null,
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Switch;
