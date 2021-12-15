import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, RestaurantPhoto } from './styles';

import ImageSkeleton from '../ImageSkeleton';

const ResturantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <h1 size="large">{restaurant.name}</h1>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
        <p size="medium">{restaurant.formatted_address || restaurant.vicinity}</p>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon}
        alt="foto do restaurante"
      />
      {!imageLoaded && <ImageSkeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default ResturantCard;
