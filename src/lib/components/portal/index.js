// eslint-disable-next-line no-restricted-imports
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ container, children }) => {
  if (process.env.NODE_ENV === 'test') {
    return children;
  }

  return createPortal(children, container);
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.instanceOf(Element),
};

Portal.defaultProps = {
  container: null,
};

export default Portal;
