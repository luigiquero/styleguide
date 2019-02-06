import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './form_group.scss';

const FormGroup = ({ fieldMessage, children, fieldState }) => {
  const fieldGroupMEssageClassName = classNames(
    'field-group__message',
    {
      'field-group__message--error': !!fieldMessage,
    },
  );

  return (
    <div className="field-group">
      {children}
      <span className={fieldGroupMEssageClassName}>
        {fieldMessage}
      </span>
    </div>
  );
};

FormGroup.propTypes = {
  errorMessage: PropTypes.string,
  children: PropTypes.element.isRequired,
};

FormGroup.defaultProps = {
  disabled: false,
  fieldMessage: null,
};

export default FormGroup;
