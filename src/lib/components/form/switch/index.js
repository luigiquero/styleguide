/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './switch.scss';

const Switch = ({
  name,
  value,
  type,
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
    <span className="switch__checked">
      <FontAwesomeIcon icon={['far', 'check']} className="switch__icon" />
    </span>
    { label && <label className="switch__label" htmlFor={name}>{label}</label> }
  </div>
);

Switch.defaultProps = {
  type: 'checkbox',
  label: null,
  checked: null,
  disabled: null,
  onChange: null,
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Switch;
