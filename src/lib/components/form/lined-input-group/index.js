import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../form-group';
import LinedInput from '../lined-input';

const LinedInputGroup = ({
  fieldRef,
  id,
  name,
  label,
  value,
  type,
  onBlur,
  onChange,
  errorMessage,
  disabled,
  className,
}) => {
  const hasError = !!errorMessage;

  return (
    <FormGroup errorMessage={errorMessage} className={className}>
      <LinedInput
        fieldRef={fieldRef}
        id={id}
        name={name}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        hasError={hasError}
        disabled={disabled}
      />
    </FormGroup>
  );
};

LinedInputGroup.propTypes = {
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
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

LinedInputGroup.defaultProps = {
  fieldRef: null,
  type: 'text',
  name: null,
  disabled: false,
  errorMessage: null,
  className: null,
  onBlur: null,
};

export default LinedInputGroup;
