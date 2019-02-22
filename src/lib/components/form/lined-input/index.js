import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './lined-input.scss';

const LinedInput = ({
  fieldRef,
  id,
  name,
  label,
  value,
  type,
  onBlur,
  onChange,
  onKeyDown,
  hasError,
  disabled,
}) => {
  const inputClassName = classNames(
    'lined-input__field',
    { 'lined-input__field--error': hasError },
  );

  const labelClassName = classNames(
    'lined-input__label',
    { 'lined-input__label--error': hasError },
  );

  return (
    <div className="lined-input">
      <input
        ref={fieldRef}
        id={id}
        name={name}
        className={inputClassName}
        value={value}
        type={type}
        disabled={disabled}
        required
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <div />
    </div>
  );
};

LinedInput.propTypes = {
  fieldRef: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'password',
    'text',
    'email',
  ]),
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

LinedInput.defaultProps = {
  fieldRef: null,
  type: 'text',
  name: null,
  hasError: false,
  disabled: false,
  onBlur: null,
  onChange: null,
  onKeyDown: null,
};

export default LinedInput;
