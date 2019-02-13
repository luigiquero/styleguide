import React from 'react';
import PropTypes from 'prop-types';
import './link.scss';

const Link = ({ url, target, children }) => (
  url ? (
    <a href={url} target={target} className="menu__link">{children}</a>
  ) : (
    <span className="menu__link">{children}</span>
  )
);

Link.defaultProps = {
  target: '_self',
  url: null,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  target: PropTypes.oneOf([
    '_blank',
    '_parent',
    '_self',
    '_top',
    'framename',
  ]),
};

export default Link;
