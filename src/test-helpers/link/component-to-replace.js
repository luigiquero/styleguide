import React from 'react';
import PropTypes from 'prop-types';

const ComponentToReplace = ({ to, className, children }) => (
  <p to={to} className={className}>
    {children}
  </p>
);

ComponentToReplace.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ComponentToReplace;
