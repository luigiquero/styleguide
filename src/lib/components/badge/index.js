import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './badge.scss';

const Badge = ({
  children,
  className,
  type,
}) => {
  const classes = classNames(
    'badge',
    `badge--${type}`,
    className,
  );

  return (
    <span className={classes}>
      { children }
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'neutral',
    'brand',
    'success',
    'warning',
    'danger',
  ]),
};

Badge.defaultProps = {
  className: null,
  type: 'neutral',
};

export default Badge;
