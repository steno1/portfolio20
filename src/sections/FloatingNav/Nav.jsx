import React from 'react';

// Nav component function
const Nav = ({ className, item }) => {
  return (
    // Rendering a list item (<li>) containing a link (<a>) for navigation
    <li className={className}>
      <a href={item.link}>{item.icon}</a>
    </li>
  );
};

export default Nav;
