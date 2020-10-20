import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.scss';
import MainHeader from '../MainHeader/MainHeader';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import { Backdrop } from '../../UI';

const MainNavigation = () => {
  const [drawerIsOpen, setDawerIsOpen] = useState(false);

  const openDrawerHandler = () => setDawerIsOpen(true);
  const closeDrawerHandler = () => setDawerIsOpen(false);

  return (
    <>
      {drawerIsOpen && (
        <>
          <Backdrop onClick={closeDrawerHandler} />
          <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className={classes['main-navigation__drawer-nav']}>
              <NavLinks />
            </nav>
          </SideDrawer>
        </>
      )}
      <MainHeader>
        <button className={classes['main-navigation__menu-btn']} onClick={openDrawerHandler}>
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
};

export default MainNavigation;
