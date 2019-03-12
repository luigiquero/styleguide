import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../icons';
import './switch.scss';

const Switch = ({
  fieldRef,
  id,
  name,
  value,
  type,
  checked,
  disabled,
  children,
  onChange,
}) => (
  <div className="switch">
    <input
      ref={fieldRef}
      id={id}
      className="switch__input"
      type={type}
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <span className="switch__checked">
      <Icon icon={['far', 'check']} className="switch__icon" />
    </span>
    { children }
  </div>
);

Switch.defaultProps = {
  fieldRef: null,
  type: 'checkbox',
  children: null,
  name: null,
  checked: null,
  disabled: null,
  onChange: null,
};

Switch.propTypes = {
  fieldRef: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
};

export default Switch;
