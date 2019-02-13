import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../form-group';
import LinedInput from '../lined-input';

const LinedInputGroup = ({
  id,
  name,
  label,
  value,
  type,
  onChange,
  errorMessage,
  disabled,
  className,
}) => {
  const hasError = !!errorMessage;

  return (
    <FormGroup errorMessage={errorMessage} className={className}>
      <LinedInput
        id={id}
        name={name}
        label={label}
        onChange={onChange}
        value={value}
        type={type}
        hasError={hasError}
        disabled={disabled}
      />
    </FormGroup>
  );
};

LinedInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'password',
    'text',
    'email',
  ]),
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

LinedInputGroup.defaultProps = {
  type: 'text',
  name: null,
  disabled: false,
  errorMessage: null,
  className: null,
};

export default LinedInputGroup;
