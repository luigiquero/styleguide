import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormGroup from '../form-group';
import LinedInput from '../lined-input';
import './lined-input-group.scss';

const LinedInputGroup = ({
  fieldRef,
  id,
  name,
  label,
  value,
  type,
  errorMessage,
  disabled,
  className,
  onBlur,
  onChange,
  onKeyDown,
}) => {
  const hasError = !!errorMessage;
  const classes = classNames('lined-input-group', className);

  return (
    <FormGroup errorMessage={errorMessage} className={classes}>
      <LinedInput
        fieldRef={fieldRef}
        id={id}
        name={name}
        label={label}
        value={value}
        type={type}
        hasError={hasError}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
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
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

LinedInputGroup.defaultProps = {
  fieldRef: null,
  type: 'text',
  name: null,
  disabled: false,
  errorMessage: null,
  className: null,
  onBlur: null,
  onChange: null,
  onKeyDown: null,
};

export default LinedInputGroup;
