import React from 'react';

import classes from './SideDrawer.module.scss';

const SideDrawer = (props) => <aside className={classes['side-drawer']}>{props.children}</aside>;

export default SideDrawer;
