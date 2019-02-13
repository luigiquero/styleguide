import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './card.scss';

const Card = ({ className, children, featured }) => {
  const classes = classNames(
    'card', className,
    {
      'card--featured': featured,
    },
  );

  return (
    <div className={classes}>{children}</div>
  );
};

Card.defaultProps = {
  className: null,
  featured: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  featured: PropTypes.bool,
};

export default Card;
