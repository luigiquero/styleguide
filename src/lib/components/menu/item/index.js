import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../link';
import Dropdown from '../dropdown';
import Icon from '../../../icons';
import useExpanded from '../../../hooks/useExpanded';
import MenuContext from '../context';
import './item.scss';

const Item = ({
  onClick,
  title,
  icon,
  url,
  target,
  active,
  children,
}) => {
  const menu = useContext(MenuContext);
  const { expanded, toggle } = useExpanded(active);

  const handleOnClick = (event) => {
    if (children) {
      event.preventDefault();

      if (!active) toggle();

      menu.expand();
    }

    onClick(event);
  };

  const iconClassName = classNames(
    'menu__icon',
    { 'menu__icon--active': active },
  );

  return (
    <li className="menu__item">
      <Link
        url={url}
        active={active}
        highlight={active && !children}
        target={target}
        onClick={url ? null : handleOnClick}
      >
        { icon && <Icon icon={icon} className={iconClassName} /> }

        <span className="menu__item-text">{ title }</span>
      </Link>

      {
        children && (
          <Dropdown active={expanded}>
            {children}
          </Dropdown>
        )
      }
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
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  icon: null,
  url: null,
  target: '_self',
  active: false,
  children: null,
  onClick: () => {},
};

export default Item;
