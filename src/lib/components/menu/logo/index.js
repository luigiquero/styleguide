/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LogoIn from './logo-in.svg';
import LogoDeva from './logo-deva.svg';
import './logo.scss';

const Logo = ({ collapsed }) => {
  const className = classNames(
    'menu__logo-wrapper',
    {
      'menu__logo-wrapper--collapsed': collapsed,
    },
  );

  return (
    <div className={className}>
      <img src={LogoIn} className="menu__logo topbar__logo--in" />
      <img src={LogoDeva} className="menu__logo topbar__logo--deva" />
    </div>
  );
};

Logo.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default Logo;
