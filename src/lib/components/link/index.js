import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './link.scss';

const Link = ({
  children,
  url,
  target,
  small,
  className,
}) => {
  const classes = classNames(
    'link', className,
    {
      'link--small': small,
    },
  );

  return (
    <a
      href={url}
      target={target}
      className={classes}
    >
      {children}
    </a>
  );
};

Link.defaultProps = {
  target: '_self',
  small: false,
  className: null,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.oneOf([
    '_blank',
    '_parent',
    '_self',
    '_top',
    'framename',
  ]),
  small: PropTypes.bool,
  className: PropTypes.string,
};

export default Link;
