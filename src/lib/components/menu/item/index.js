import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../link';
import Dropdown from '../dropdown';
import Icon from '../../../icons';
import './item.scss';

const Item = ({
  title,
  icon,
  url,
  target,
  active,
  links,
  onClick,
}) => {
  const iconClassName = classNames(
    'menu__icon',
    { 'menu__icon--active': active },
  );

  return (
    <li className="menu__item">
      <Link
        url={url}
        active={active}
        target={target}
        onClick={onClick}
      >
        { icon && <Icon icon={icon} className={iconClassName} /> }

        <span className="menu__item-text">{ title }</span>
      </Link>

      { links && <Dropdown active={active} links={links} /> }
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  url: PropTypes.string,
  target: PropTypes.oneOf([
    '_blank',
    '_parent',
    '_self',
    '_top',
    'framename',
  ]),
  active: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

Item.defaultProps = {
  icon: null,
  url: null,
  target: '_self',
  active: false,
  links: null,
  onClick: null,
};

export default Item;
