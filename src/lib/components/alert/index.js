import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../..';
import './alert.scss';

const Alert = ({
  type,
  visible,
  onCloseClick,
  children,
}) => {
  if (!visible) return null;

  const icons = {
    danger: 'times-circle',
    warning: 'exclamation-triangle',
    success: 'check-circle',
  };

  return (
    <div className={`alert alert--${type}`}>
      <div>
        <Icon icon={['far', icons[type]]} className={`alert__icon alert__icon--${type}`} />

        {children}
      </div>

      <Icon icon={['far', 'times']} className="alert__close" onClick={onCloseClick} />
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf([
    'danger',
    'warning',
    'success',
  ]).isRequired,
  visible: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Alert;
