import React from 'react';

import classes from './MainHeader.module.scss';

const MainHeader = (props) => <header className={classes['main-header']}>{props.children}</header>;

export default MainHeader;
