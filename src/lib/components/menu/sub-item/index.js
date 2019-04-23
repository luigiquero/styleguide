import React from 'react';
import Link from '../link';

const SubItem = props => (
  <li className="menu__item menu__item--child">
    <Link child {...props} />
  </li>
);

export default SubItem;
