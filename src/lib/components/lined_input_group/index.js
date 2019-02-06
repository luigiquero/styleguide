import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormGroup from '../form_group/';
import LinedInput from '../lined_input/';

const LinedInputGroup = ({ 
   id, label, fieldMessage, value, onChange, type, disabled,
}) => {
  const hasError = !!fieldMessage;

  console.log(hasError);

  return (
    <FormGroup fieldMessage={fieldMessage}>
      <LinedInput 
        id={id}
        label={label}
        onChange={onChange}
        value={value}
        type={type}
        hasError
        disabled
      />
    </FormGroup>
  );
};

LinedInputGroup.propTypes = {
  fieldMessage: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldMessage: PropTypes.string,
  fieldState: PropTypes.string,
  type: PropTypes.oneOf([
    'password',
    'text',
  ]),
};

LinedInputGroup.defaultProps = {
  disabled: false,
  type: 'text',
  fieldMessage: null,
};

export default LinedInputGroup;
