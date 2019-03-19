/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import LogoIn from './logo-in.svg';
import LogoDeva from './logo-deva.svg';
import './logo.scss';

const Logo = () => (
  <div className="menu__logo-wrapper">
    <img src={LogoIn} className="menu__logo menu__logo--in" />
    <img src={LogoDeva} className="menu__logo menu__logo--deva" />
  </div>
);

export default Logo;
