/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useMedia from '../../../hooks/useMedia';
import { useMenuContext } from '../context';
import './link.scss';

const Link = ({
  children,
  title,
  url,
  child,
  active,
  highlight,
  target,
  onClick,
}) => {
  const className = classNames(
    'menu__link',
    {
      'menu__link--child': child,
      'menu__link--active': active,
      'menu__link--highlight': highlight,
    },
  );

  const linkTitle = title || children;

  const menu = useMenuContext();
  const isMobile = useMedia('mobile');

  const handleOnClick = (event) => {
    onClick(event);

    if (event.defaultPrevented) return;

    if (menu.expanded && isMobile) {
      menu.collapse();
    }
  };

  return (
    url ? (
      <a href={url} target={target} className={className} onClick={handleOnClick}>{ linkTitle }</a>
    ) : (
      <span className={className} onClick={handleOnClick} role="presentation">{ linkTitle }</span>
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
  highlight: PropTypes.bool,
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
  highlight: false,
  target: '_self',
  onClick: () => { },
};

export default Link;
