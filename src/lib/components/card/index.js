import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './card.scss';

const Card = ({ className, children }) => {
  const classes = classNames('card', className);

  return (
    <div className={classes}>{children}</div>
  );
};

Card.defaultProps = {
  className: null,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
