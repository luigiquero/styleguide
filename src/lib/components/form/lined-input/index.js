import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './lined-input.scss';

const LinedInput = ({
  id,
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
        id={id}
        onChange={onChange}
        className={inputClassName}
        value={value}
        type={type}
        disabled={disabled}
        required
      />
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <div />
    </div>
  );
};

LinedInput.propTypes = {
  id: PropTypes.string.isRequired,
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
