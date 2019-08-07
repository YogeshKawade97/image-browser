import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ baseUrl }) => {
  return (
    <div className="ui secondary  menu">
      <NavLink to={`${baseUrl}`} className="item">
        Messages
      </NavLink>
      <NavLink to={`${baseUrl}/friends`} className="item">
        Friends
      </NavLink>
    </div>
  );
};

export default Header;
