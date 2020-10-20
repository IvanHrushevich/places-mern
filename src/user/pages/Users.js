import React from 'react';

import UserList from '../components/UserList/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ivan',
      image: 'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png',
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
