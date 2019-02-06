import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './lined_input.scss';

const LinedInput = ({
  name,
  label,
  value,
  type,
  onChange,
  hasError,
  disabled,
}) => {
  const labelClassName = classNames(
    'floating-label',
    {
      'floating-label--error': hasError,
    },
  );
  const inputClassName = classNames(
    'lined-input',
    {
      'lined-input--error': hasError,
    },
  );

  return (
    <div className="lined-input-control">
      <input
        name={name}
        onChange={onChange}
        className={inputClassName}
        value={value}
        type={type}
        disabled={disabled}
      />
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

LinedInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'password',
    'text',
    'email',
  ]),
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
};

LinedInput.defaultProps = {
  type: 'text',
  hasError: false,
  disabled: false,
};

export default LinedInput;
