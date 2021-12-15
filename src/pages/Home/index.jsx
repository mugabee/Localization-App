
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Logout from '../../components/Logout';

import {
  RestaurantCard,
  Modal,
  Map,
  ImageCard,
  Loader,
  ImageSkeleton as Skeleton,
} from '../../components';

import { Container, Search, Carousel, Wrapper } from './styles';

const Home = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const [placeId, setPlaceId] = useState(null);
  const [open, setOpen] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
  const hasRestaurants = restaurants.length > 0;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const renderCarousel = () => {
    if (hasRestaurants) {
      return (
        <>
          <h1 className="text-2xl font-bold leading-7 t py-2 text-gray-900 sm:text-3xl sm:truncate">Search Results</h1>
          
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <ImageCard key={restaurant.place_id} restaurant={restaurant} />
            ))}
          </Carousel>
        </>
      );
    }
    return <Loader />;
  };

  const renderRestaurants = () => {
    if (hasRestaurants) {
      return restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.place_id}
          restaurant={restaurant}
          onClick={() => {
            setPlaceId(restaurant.place_id);
            setOpen(true);
          }}
        />
      ));
    }
    return null;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setQuery(value);
    }
  };
 
  return (
    <Wrapper>
      <Container>
       <Logout />
   
        <Search>
         
          <TextField
            outlined
            label="search"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input type="text" value={value} onKeyPress={handleKeyPress} onChange={handleChange} />
          </TextField>
          {renderCarousel()}
        </Search>
        {renderRestaurants()}
        <Modal open={open} onClose={() => setOpen(false)}>
          {restaurantSelected ? (
            <>
              <p className="font-semibold text-green-500 text-2xl"> Name: <span className="text-black">{restaurantSelected?.name}</span></p>
              <p className="font-semibold text-green-500 text-2xl"> Contact Number: <span className="text-black">{restaurantSelected?.formatted_phone_number}</span></p>
              <p className="font-semibold text-green-500 text-2xl"> Address : <span className="text-black">{restaurantSelected?.formatted_address}</span></p>
              <p className="font-semibold text-green-500 text-2xl"> Status : <span className="text-black">
                {restaurantSelected?.opening_hours?.open_now
                  ? 'Open Now '
                  : 'Closed Now'}
                  </span>
              </p>
            </>
          ) : (
            <>
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
            </>
          )}
        </Modal>
      </Container>
      <Map query={query} placeId={placeId} />
    </Wrapper>
  );
};

export default Home;
