import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


export const Card = styled.div`
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;

export default ({ restaurant }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon;

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = image;
    imageLoader.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={image}>
          <h1 className="text-white">{restaurant.name}</h1>
          
        </Card>
      ) : (
        <div className="w-60 h-24 border-2 rounded-md mx-auto mt-20">
  <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
    <div className="w-12 bg-red-500 h-12 rounded-full ">
    </div>
        <div className="flex flex-col space-y-3">
        <div className="w-36 bg-gray-300 h-6 rounded-md ">
        </div>
        <div className="w-24 bg-gray-300 h-6 rounded-md ">
        </div>
    </div>
  </div>
</div>
      )}
    </>
  );
};
