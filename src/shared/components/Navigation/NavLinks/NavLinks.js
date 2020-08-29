import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavLinks.module.scss';

const NavLinks = () => (
  <ul className={classes['nav-links']}>
    <li>
      <NavLink to="/" exact>
        ALL USERS
      </NavLink>
      <NavLink to="/u1/places">MY PLACES</NavLink>
      <NavLink to="/places/new">ADD PLACE</NavLink>
      <NavLink to="/auth">AUTHENTICATE</NavLink>
    </li>
  </ul>
);

export default NavLinks;
