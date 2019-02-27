import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './link.scss';

const Link = ({
  url,
  child,
  active,
  target,
  children,
}) => {
  const className = classNames(
    'menu__link',
    { 'menu__link--child': child, 'menu__link--active': active },
  );

  return (
    url ? (
      <a href={url} target={target} className={className}>{children}</a>
    ) : (
      <span className={className}>{children}</span>
    )
  );
};

Link.defaultProps = {
  url: null,
  child: false,
  active: false,
  target: '_self',
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  child: PropTypes.bool,
  active: PropTypes.bool,
  target: PropTypes.oneOf([
    '_blank',
    '_parent',
    '_self',
    '_top',
    'framename',
  ]),
};

export default Link;
