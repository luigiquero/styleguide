import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../icons';
import './settings.scss';

const Settings = ({
  name,
  role,
  links,
  active,
}) => (
  <div className="topbar-settings">
    <header className="topbar-settings__header">
      { name }
      <span>{ role }</span>
    </header>

    <nav className="topbar-settings__nav">
      {
        links.map(({ url, icon, title }) => (
          <a href={url} className="topbar-settings__link" key={url}>
            <Icon icon={icon} />
            { title }
          </a>
        ))
      }
    </nav>
  </div>
);

Settings.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  active: PropTypes.bool,
};

Settings.defaultProps = {
  active: false,
};

export default Settings;
