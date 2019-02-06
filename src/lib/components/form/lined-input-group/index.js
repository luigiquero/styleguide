import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../form-group';
import LinedInput from '../lined-input';

const LinedInputGroup = ({
  name,
  label,
  value,
  type,
  onChange,
  errorMessage,
  disabled,
}) => {
  const hasError = !!errorMessage;

  return (
    <FormGroup errorMessage={errorMessage}>
      <LinedInput
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
  name: PropTypes.string.isRequired,
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
};

LinedInputGroup.defaultProps = {
  type: 'text',
  disabled: false,
  errorMessage: null,
};

export default LinedInputGroup;
