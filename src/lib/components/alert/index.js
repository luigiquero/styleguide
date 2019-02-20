import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../..';
import classNames from 'classnames';
import './alert.scss';

const Alert = ({
  type,
  visible,
  onCloseClick,
  showClose,
  className,
  children,
}) => {
  if (!visible) return null;

  const blockClassName = classNames(
    'alert',
    `alert--${type}`,
    className,
  );

  const icons = {
    danger: 'times-circle',
    warning: 'exclamation-triangle',
    success: 'check-circle',
  };

  return (
    <div className={blockClassName}>
      <div className="alert__body">
        <Icon icon={['far', icons[type]]} className={`alert__icon alert__icon--${type}`} />

        <span className="alert__content">
          { children }
        </span>
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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  visible: true,
  onCloseClick: null,
  className: null,
  showClose: false,
};

export default Alert;
