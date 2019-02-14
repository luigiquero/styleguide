import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './label.scss';

const Label = ({
  children,
  htmlFor,
  className,
  small,
  disabled,
  featured,
}) => {
  const classes = classNames(
    'label', className,
    {
      'label--small': small,
      'label--disabled': disabled,
      'label--featured': featured,
    },
  );

  return (
    <label className={classes} htmlFor={htmlFor}>{children}</label>
  );
};

Label.defaultProps = {
  htmlFor: null,
  className: null,
  small: false,
  disabled: false,
  featured: false,
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  featured: PropTypes.bool,
};

export default Label;
