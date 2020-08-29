import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.scss';
import MainHeader from '../MainHeader/MainHeader';
import NavLinks from '../NavLinks/NavLinks';

const MainNavigation = () => (
  <MainHeader>
    <button className={classes['main-navigation__menu-btn']}>
      <span />
      <span />
      <span />
    </button>
    <h1 className={classes['main-navigation__title']}>
      <Link to="/">Your places</Link>
    </h1>
    <nav>
      <NavLinks />
    </nav>
  </MainHeader>
);

export default MainNavigation;
