import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './lined-input.scss';

const LinedInput = ({
  name,
  label,
  value,
  type,
  onChange,
  hasError,
  disabled,
}) => {
  const inputClassName = classNames(
    'lined-input__field',
    {
      'lined-input__field--error': hasError,
    },
  );

  const labelClassName = classNames(
    'lined-input__label',
    {
      'lined-input__label--error': hasError,
    },
  );

  return (
    <div className="lined-input">
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
