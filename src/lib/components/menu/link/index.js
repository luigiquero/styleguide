/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './link.scss';

const Link = ({
  children,
  title,
  url,
  child,
  active,
  target,
  onClick,
}) => {
  const className = classNames(
    'menu__link',
    { 'menu__link--child': child, 'menu__link--active': active },
  );

  const linkTitle = title || children;

  return (
    (url && !onClick) ? (
      <a href={url} target={target} className={className}>{ linkTitle }</a>
    ) : (
      <span className={className} onClick={onClick} role="presentation">{ linkTitle }</span>
    )
  );
};

const childrenOrTitleRequired = ({ title, children }) => {
  if (!title && !children) {
    return new Error(
      'One of props \'title\' or \'children\' was not specified on Link.',
    );
  }

  return null;
};

Link.propTypes = {
  children: childrenOrTitleRequired,
  title: childrenOrTitleRequired,
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
  onClick: PropTypes.func,
};

Link.defaultProps = {
  url: null,
  child: false,
  active: false,
  target: '_self',
  onClick: null,
};

export default Link;
