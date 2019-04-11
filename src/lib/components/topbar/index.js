import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './logo';
import BurguerIcon from './burguer-icon.svg';
import Button from '../button';
import Icon from '../../icons';
import Settings from './settings';
import './topbar.scss';

class Topbar extends Component {
  state = {
    settingsActive: false,
    logoMinified: false,
  };

  toggleSettings = () => {
    const { settingsActive } = this.state;
    this.setState({ settingsActive: !settingsActive });
  }

  toggleLogo = () => {
    const { logoMinified } = this.state;
    this.setState({ logoMinified: !logoMinified });

    const { onLogoClick } = this.props;
    onLogoClick();
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

    const {
      settingsActive,
      logoMinified,
    } = this.state;

    const className = classNames(
      'topbar',
      { 'topbar--with-info': !!children },
    );

    const burguerClassName = classNames(
      'topbar__burguer',
      {
        'topbar__burguer--minified': logoMinified,
      },
    );

    return (
      <div className={className}>
        <div
          className="topbar__brand"
          role="presentation"
          onClick={this.toggleLogo}
        >
          <Logo minified={logoMinified} />
          <img
            src={BurguerIcon}
            alt="Minificar menu"
            className={burguerClassName}
          />
        </div>

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

Topbar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  clickOnFilterButton: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  showFilterButton: PropTypes.bool,
  children: PropTypes.node,
};

Topbar.defaultProps = {
  showFilterButton: true,
  children: null,
};

export default Topbar;
