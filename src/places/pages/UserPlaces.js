import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList/PlaceList';

const PLACES = [
  {
    id: 'p1',
    title: 'Malinauka',
    description: 'Nice place',
    imageUrl: 'https://blizko.by/ckeditor_assets/pictures/9659/content_stancija-metro-malinovka.jpg',
    address: 'Minsk',
    location: {
      lat: 40,
      lng: -73,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Malinauka',
    description: 'Nice place 2',
    imageUrl: 'https://blizko.by/ckeditor_assets/pictures/9659/content_stancija-metro-malinovka.jpg',
    address: 'Brest',
    location: {
      lat: 40,
      lng: -73,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
