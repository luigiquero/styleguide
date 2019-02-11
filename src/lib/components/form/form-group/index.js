import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './form-group.scss';

const FormGroup = ({
  errorMessage,
  children,
  className,
}) => {
  const hassErrorMessage = !!errorMessage;

  const messageClassName = classNames(
    'form-group__message',
    {
      'form-group__message--error': hassErrorMessage,
    },
    className,
  );

  return (
    <div className="form-group">
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
  className: PropTypes.string,
};

FormGroup.defaultProps = {
  errorMessage: null,
  className: null,
};

export default FormGroup;
