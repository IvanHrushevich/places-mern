import React from 'react';

import './NewPlace.css';
import { Input } from '../../shared/components';

const NewPlace = () => (
  <form className="place-form">
    <Input element="input" type="text" label="Title" validators={[]} errorText="Please enter a valid title." />
  </form>
);

export default NewPlace;
