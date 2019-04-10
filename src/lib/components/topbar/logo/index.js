/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LogoIn from './logo-in.svg';
import LogoDeva from './logo-deva.svg';
import './logo.scss';

const Logo = ({ minified }) => {
  const className = classNames(
    'topbar__logo-wrapper',
    {
      'topbar__logo-wrapper--minified': minified,
    },
  );

  return (
    <div className={className}>
      <img src={LogoIn} className="topbar__logo topbar__logo--in" />
      <img src={LogoDeva} className="topbar__logo topbar__logo--deva" />
    </div>
  );
};

Logo.propTypes = {
  minified: PropTypes.bool.isRequired,
};

export default Logo;
