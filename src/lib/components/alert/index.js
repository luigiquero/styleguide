import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../..';
import './alert.scss';

const Alert = ({
  type,
  visible,
  onCloseClick,
  showClose,
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

      {
        showClose ? (
          <Icon icon={['far', 'times']} className="alert__close" onClick={onCloseClick} />
        ) : null
      }
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf([
    'danger',
    'warning',
    'success',
  ]).isRequired,
  visible: PropTypes.bool,
  onCloseClick: PropTypes.func,
  showClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  visible: true,
  onCloseClick: null,
  showClose: false,
};

export default Alert;
