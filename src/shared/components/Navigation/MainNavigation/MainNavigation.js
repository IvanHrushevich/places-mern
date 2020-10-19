import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.scss';
import MainHeader from '../MainHeader/MainHeader';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';

const MainNavigation = () => (
  <>
    <SideDrawer>
      <nav className={classes['main-navigation__drawer-nav']}>
        <NavLinks />
      </nav>
    </SideDrawer>
    <MainHeader>
      <button className={classes['main-navigation__menu-btn']}>
        <span />
        <span />
        <span />
      </button>
      <h1 className={classes['main-navigation__title']}>
        <Link to="/">Your places</Link>
      </h1>
      <nav className={classes['main-navigation__header-nav']}>
        <NavLinks />
      </nav>
    </MainHeader>
  </>
);

export default MainNavigation;
