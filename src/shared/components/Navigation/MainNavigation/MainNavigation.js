import React from 'react';

import classes from './MainNavigation.module.scss';
import MainHeader from '../MainHeader/MainHeader';
import { Link } from 'react-router-dom';

const MainNavigation = ({ children }) => (
  <MainHeader>
    <button className={classes['main-navigation__menu-btn']}>
      <span />
      <span />
      <span />
    </button>
    <h1 className={classes['main-navigation__title']}>
      <Link to="/">Your places</Link>
    </h1>
    <nav>...</nav>
  </MainHeader>
);

export default MainNavigation;
