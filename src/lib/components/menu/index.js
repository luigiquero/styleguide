/* eslint-disable react/destructuring-assignment */
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
    const menuItems = this.props.links;
    const { className } = this.props;

    const classes = classNames(
      className,
      'menu',
      { 'menu--minified': minified },
    );

    return (
      <div className={classes}>
        <div
          className="menu__header"
          role="presentation"
          onClick={this.toggleMinified}
        >
          <Logo />
          <img
            src={BurguerIcon}
            alt="Minificar menu"
            className="menu__burguer"
          />
        </div>

        <ul className="menu__nav">
          {
            menuItems.map(({
              title,
              url,
              icon,
              target,
              active,
              links,
            }) => (
              <Item
                title={title}
                icon={icon}
                url={url}
                target={target}
                active={active}
                links={links}
                key={title.toLowerCase()}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

Menu.defaultProps = {
  className: null,
};

export default Menu;
