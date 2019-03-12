import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './logo';
import Item from './item';
import BurguerIcon from './burguer-icon.svg';
import './menu.scss';

class Menu extends Component {
  state = {
    minified: false,
  };

  toggleMinified = () => {
    const { minified } = this.state;
    this.setState(() => ({ minified: !minified }));
  }

  render() {
    const { minified } = this.state;
    const { links } = this.props;

    const className = classNames(
      'menu',
      { 'menu--minified': minified },
    );

    return (
      <div className={className}>
        <div
          className="menu__header"
          role="presentation"
          onClick={this.toggleMinified}
        >
          <Logo />
          <img src={BurguerIcon} alt="Minificar menu" className="menu__burguer" />
        </div>

        <ul className="menu__nav">
          { links.map(linkProps => <Item {...linkProps} />) }
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Menu;
