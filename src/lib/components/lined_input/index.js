import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './lined_input.scss';

const LinedInput = ({
  id, label, value, onChange, type, lined, hasError, disabled,
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
        id={id}
        onChange={onChange}
        className={inputClassName}
        value={value}
        type={type}
        required
      />
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

LinedInput.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  type: PropTypes.oneOf([
    'password',
    'text',
  ]),
};

LinedInput.defaultProps = {
  hasError: false,
  disabled: false,
  type: 'text',
};

export default LinedInput;
