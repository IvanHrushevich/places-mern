import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => (
  <ul className="nav-links">
    <li>
      <NavLink activeClassName="active" to="/" exact>
        ALL USERS
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/u1/places">
        MY PLACES
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/places/new">
        ADD PLACE
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/auth">
        AUTHENTICATE
      </NavLink>
    </li>
  </ul>
);

export default NavLinks;
