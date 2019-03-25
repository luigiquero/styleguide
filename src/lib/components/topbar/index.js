import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../../icons';
import Settings from './settings';
import './topbar.scss';

class Topbar extends Component {
  state = {
    settingsActive: false,
  };

  toggleSettings = () => {
    const { settingsActive } = this.state;
    this.setState({ settingsActive: !settingsActive });
  }

  render() {
    const {
      avatarURL,
      name,
      role,
      links,
      clickOnFilterButton,
    } = this.props;

    const { settingsActive } = this.state;

    return (
      <div className="topbar">
        <Button primary onClick={clickOnFilterButton}>
          <Icon icon={['fas', 'filter']} />
          Filtros
        </Button>

        <div className="topbar__settings">
          <img
            alt={name}
            src={avatarURL}
            className="topbar__avatar"
            role="presentation"
            onClick={this.toggleSettings}
          />

          {
            settingsActive ? (
              <Settings
                name={name}
                role={role}
                links={links}
                active={settingsActive}
                toggleSettings={this.toggleSettings}
              />
            ) : null
          }
        </div>
      </div>
    );
  }
}

Topbar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  clickOnFilterButton: PropTypes.func.isRequired,
};

export default Topbar;
