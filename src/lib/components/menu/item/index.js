import React from 'react';
import PropTypes from 'prop-types';
import Link from '../link';
import { Icon } from '../../..';

const Item = ({
  title,
  icon,
  url,
  target,
  active,
  links,
}) => {
  return (
    <li className="menu__item">
      { icon && <Icon icon={icon} className="menu__icon" /> }

      <Link url={url} active={active} target={target}>
        { title }
      </Link>

      {
        links && (
          <ul className="menu__dropdown">
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
