import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Card } from '../../../shared/components';
import classes from './UserItem.module.scss';

const UserItem = ({ name, image, placeCount, id }) => (
  <li className={classes['user-item']}>
    <Card className={classes['user-item__content']}>
      <Link to={`/${id}/places`}>
        <div className={classes['user-item__image']}>
          <Avatar image={image} alt={name} />
        </div>
        <div className={classes['user-item__info']}>
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
          </h3>
        </div>
      </Link>
    </Card>
  </li>
);

export default UserItem;
