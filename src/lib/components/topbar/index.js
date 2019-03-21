import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../../icons';
import './topbar.scss';

const Topbar = ({
  avatarURL,
  name,
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
  </div>
);

Topbar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Topbar;
