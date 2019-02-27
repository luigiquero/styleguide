import React from 'react';
import Link from './link';

const Menu = () => (
  <div>
    <div><Link>Link</Link></div>
    <div><Link active>Link Active</Link></div>
    <div><Link url="/">Link with URL</Link></div>
    <div><Link child>Link Child</Link></div>
    <div><Link child active>Link Child Active</Link></div>
  </div>
);

export default Menu;
