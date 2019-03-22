import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../../icons';
import Settings from './settings';
import './topbar.scss';

const Topbar = ({
  avatarURL,
  name,
  role,
  links,
}) => (
  <div className="topbar">
    <Button primary>
      <Icon icon={['fas', 'filter']} />
      Filtros
    </Button>

    <img
      alt={name}
      src={avatarURL}
      className="topbar__avatar"
    />

    <Settings
      name={name}
      role={role}
      links={links}
      active
    />
  </div>
);

Topbar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Topbar;
