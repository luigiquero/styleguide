import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../../icons';
import './settings.scss';

class Settings extends Component {
  state = {
    visible: true,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  hide = () => {
    this.setState({ visible: false });
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { toggleSettings } = this.props;
      this.hide();
      setTimeout(toggleSettings, 1000);
    }
  }

  render() {
    const {
      name,
      role,
      links,
    } = this.props;

    const { visible } = this.state;

    const className = classNames(
      'topbar-settings',
      {
        'topbar-settings--active': visible,
      },
    );

    return (
      <div ref={this.setWrapperRef} className={className}>
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
  }
}

Settings.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  active: PropTypes.bool.isRequired,
  toggleSettings: PropTypes.func.isRequired,
};

export default Settings;
