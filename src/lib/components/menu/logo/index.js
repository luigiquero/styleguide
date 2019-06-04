/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LogoImage from './logo.svg';
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
      <img src={LogoImage} className="menu__logo" />
    </div>
  );
};

Logo.propTypes = {
  collapsed: PropTypes.bool,
};

Logo.defaultProps = {
  collapsed: false,
};

export default Logo;
