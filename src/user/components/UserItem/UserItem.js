import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Card } from '../../../shared/components';
import classes from './UserItem.module.scss';

const UserItem = (props) => (
  <li className={classes['user-item']}>
    <Card className={classes['user-item__content']}>
      <Link to={`/${props.id}/places`}>
        <div className={classes['user-item__image']}>
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className={classes['user-item__info']}>
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
          </h3>
        </div>
      </Link>
    </Card>
  </li>
);

export default UserItem;
