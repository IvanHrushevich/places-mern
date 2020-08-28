import React from 'react';

import classes from './Card.module.scss';

const Card = ({ className, style, children }) => {
  return (
    <div className={`${classes.card} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
