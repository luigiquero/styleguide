/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useHover from 'react-use-hover';
import LogoIn from './logo-in.svg';
import LogoDeva from './logo-deva.svg';
import BurguerIcon from '../burguer-icon.svg';
import './logo.scss';

const Logo = ({ collapsed }) => {
  const [isHovering, hoverProps] = useHover();

  const className = classNames(
    'menu__logo-wrapper',
    {
      'menu__logo-wrapper--collapsed': collapsed,
      'menu__logo-wrapper--hover': isHovering,
    },
  );

  return (
    <div className={className}>
      {
        isHovering && collapsed ? (
          <div {...hoverProps} className="menu__logo-burguer">
            <img src={BurguerIcon} alt="Minificar menu" className="menu__logo-burguer__image" />
          </div>
        ) : (
          <Fragment>
            <img {...hoverProps} src={LogoIn} className="menu__logo topbar__logo--in" />
            <img src={LogoDeva} className="menu__logo topbar__logo--deva" />
          </Fragment>
        )
      }
    </div>
  );
};

Logo.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default Logo;
