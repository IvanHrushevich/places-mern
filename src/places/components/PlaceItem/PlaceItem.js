import React, { useState } from 'react';

import classes from './PlaceItem.module.scss';
import { Button, Card, Modal } from '../../../shared/components';

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <h1>The map</h1>
        </div>
      </Modal>
      <li className={classes['place-item']}>
        <Card className={classes['place-item__content']}>
          <div className={classes['place-item__image']}>
            <img src={props.image} alt={props.title} />
          </div>

          <div className={classes['place-item__info']}>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className={classes['place-item__actions']}>
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
