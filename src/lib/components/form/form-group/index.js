import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './form-group.scss';

const FormGroup = ({ errorMessage, children }) => {
  const hassErrorMessage = !!errorMessage;

  const messageClassName = classNames(
    'field-group__message',
    {
      'field-group__message--error': hassErrorMessage,
    },
  );

  return (
    <div className="field-group">
      {children}
      <span className={messageClassName}>
        {errorMessage}
      </span>
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
};

FormGroup.defaultProps = {
  errorMessage: null,
};

export default FormGroup;
