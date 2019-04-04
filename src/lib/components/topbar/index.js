import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
      showFilterButton,
      children,
    } = this.props;

    const { settingsActive } = this.state;
    const className = classNames(
      'topbar',
      { 'topbar--with-info': !!children },
    );

    return (
      <div className={className}>
        { children }

        <div className="topbar__options">
          {
            showFilterButton && (
              <Button primary onClick={clickOnFilterButton}>
                <Icon icon={['fas', 'filter']} />
                Filtros
              </Button>
            )
          }
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
      </div>
    );
  }
}

Topbar.defaultProps = {
  showFilterButton: true,
  children: null,
};

Topbar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  clickOnFilterButton: PropTypes.func.isRequired,
  showFilterButton: PropTypes.bool,
  children: PropTypes.node,
};

export default Topbar;
