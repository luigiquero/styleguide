import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Portal from '../portal';
import './fullscreen-overlay.scss';

const FullScreenOverlay = ({
  className,
  container,
  ...props
}) => {
  const classes = classNames('fullscreen-overlay', className);

  return (
    <Portal container={container || document.body}>
      <div className={classes} {...props} />
    </Portal>
  );
};

FullScreenOverlay.propTypes = {
  className: PropTypes.string,
  container: PropTypes.instanceOf(Element),
};

FullScreenOverlay.defaultProps = {
  className: null,
  container: null,
};

export default FullScreenOverlay;
