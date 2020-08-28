import React from 'react';

import UserItem from '../UserItem/UserItem';
import classes from './UserList.module.scss';
import { Card } from '../../../shared/components';

const UserList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={classes['users-list']}>
      {items.map((user) => (
        <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
      ))}
    </ul>
  );
};

export default UserList;
