import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../link';
import { Icon } from '../../..';
import './item.scss';

const Item = ({
  title,
  icon,
  url,
  target,
  active,
  links,
}) => {
  const iconClassName = classNames(
    'menu__icon',
    { 'menu__icon--active': active },
  );

  const dropdownClassName = classNames(
    'menu__dropdown',
    { 'menu__dropdown--active': active },
  );

  return (
    <li className="menu__item">
      <Link url={url} active={active} target={target}>
        { icon && <Icon icon={icon} className={iconClassName} /> }

        { title }
      </Link>

      {
        links && (
          // separar esse dropdown num arquivo a parte!
          <ul className={dropdownClassName}>
            {
              links.map(childParams => (
                <li className="menu__item menu__item--child">
                  <Link child {...childParams} />
                </li>
              ))
            }
          </ul>
        )
      }
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType(
    PropTypes.array,
    PropTypes.string,
  ),
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
};

Item.defaultProps = {
  icon: null,
  url: null,
  target: '_self',
  active: false,
  links: null,
};

export default Item;
