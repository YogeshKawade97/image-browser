import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="ui secondary  menu">
      <NavLink exact to="/" className="item">
        Home
      </NavLink>
      <NavLink to="/about" className="item">
        About Us
      </NavLink>
      <NavLink to="/images" className="item">
        Image Search
      </NavLink>
    </div>
  );
};

export default Navigation;
