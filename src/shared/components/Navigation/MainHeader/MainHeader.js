import React from 'react';

import classes from './MainHeader.module.scss';

const MainHeader = ({ children }) => <header className={classes['main-header']}>{children}</header>;

export default MainHeader;
